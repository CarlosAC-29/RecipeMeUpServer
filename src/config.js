const { config } = require('dotenv');
config();
//geminiConfig is the configuration object for the gemini-1.0-pro model
const geminiConfig = {
    MODEL_NAME : process.env.MODEL_NAME,
    API_KEY : process.env.API_KEY
}

//dialogflowConfig is the configuration object for the dialogflow CX
const dialogflowConfig = {
    credentials: {
        private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
    },
    project_id: process.env.DIALOGFLOW_PROJECT_ID,
    location: "global",
    agent_id: process.env.DIALOGFLOW_AGENT_ID,
    language_code: "es",
    apiEndpoint: process.env.DIALOGFLOW_API_ENDPOINT
}

module.exports = {
    geminiConfig,
    dialogflowConfig
}