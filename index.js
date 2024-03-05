const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = 'AIzaSyA5LnlpAQHyDX5q3Ew5W_9valO8iVDQKBU';

app.use(bodyParser.json());
app.use(cors());

app.post('/api-chat', async (req, res) => {

    try {
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: MODEL_NAME })
        const userInput = req.body.userInput;

        if(userInput === undefined || userInput === null || userInput === "") {
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

});

app.listen(port, () => {
    console.log(`Server runing in port${port}`)
}
)
