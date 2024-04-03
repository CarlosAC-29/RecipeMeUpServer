const { GoogleGenerativeAI } = require("@google/generative-ai");
const { SessionsClient } = require('@google-cloud/dialogflow-cx');
const { geminiConfig, dialogflowConfig } = require("../config");
const { Readable } = require('stream');
const fs = require('fs');
const uuid = require('uuid');
const util = require('util');

const recieveAudio = async (req, res) => {
    try {
        // req.file contiene la información del archivo de audio cargado
        console.log('Audio recibido:', req.file);

        try {
            const dialogflowResponse = await AudioToDialogflowCX("./uploads/" + req.file.originalname);
            res.status(200).json(dialogflowResponse);
        } catch (error) {
            console.error('Error al procesar la solicitud de audio:', error);
            res.status(500).json({ error: 'Hubo un error al procesar la solicitud de audio.' });
        }
    } catch (error) {
        console.error('Error al procesar el archivo de audio:', error);
        res.status(500).send('Error interno del servidor al procesar el archivo de audio.');
    }
};

const geminiApi = async (req, res) => {

    const MODEL_NAME = geminiConfig.MODEL_NAME;
    const API_KEY = geminiConfig.API_KEY;

    try {
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: MODEL_NAME })
        const userInput = req.body.userInput;

        if (userInput === undefined || userInput === null || userInput === "") {
            res.status(400).json({ error: "User input is required" });
            return;
        }

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const chat = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const result = await chat.sendMessage(userInput);
        if (result && result.response) {
            const responseText = result.response.text();
            if (responseText) {
                res.json({ response: responseText })
            } else {
                res.status(500).json({ error: "Response not found" })
            }
        } else {
            res.status(500).json({ error: "Unxepected error occurred" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error inside server" })
    }

};

// Función para enviar audio a Dialogflow CX
const AudioToDialogflowCX = async (audioFilePath) => {
    const sessionId = uuid.v4();
    const sessionClient = new SessionsClient({ apiEndpoint: dialogflowConfig.apiEndpoint, ...dialogflowConfig });
    const sessionPath = sessionClient.projectLocationAgentSessionPath(
        dialogflowConfig.project_id,
        "us-central1",
        dialogflowConfig.agent_id,
        sessionId
    );

    const readFile = util.promisify(fs.readFile);
    const inputAudio = await readFile(audioFilePath);

    const request = {
        session: sessionPath,
        queryInput: {
            languageCode: 'es',
            audio: {
                config: {
                    audioEncoding: 'AUDIO_ENCODING_MP3',
                    //sampleRateHertz: 16000,
                    languageCode: 'es',
                },
                audio: inputAudio,
            },
        },
    };

    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult;
    return {
        query: result.transcript,
        response: result.responseMessages[0].text.text[0]
    };
}

const dilogFlow = async (req, res) => {
    const { audioFilePath } = req.body;
    if (!audioFilePath) {
        return res.status(400).json({ error: 'No se proporcionó la ruta del archivo de audio.' });
    }

    try {
        const dialogflowResponse = await AudioToDialogflowCX(audioFilePath);
        res.status(200).json(dialogflowResponse);
    } catch (error) {
        console.error('Error al procesar la solicitud de audio:', error);
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud de audio.' });
    }
};

module.exports = {
    geminiApi,
    dilogFlow,
    recieveAudio
}