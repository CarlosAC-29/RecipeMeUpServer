const { config } = require('dotenv');
config();
console.log(process.env.HOLA);
//geminiConfig is the configuration object for the gemini-1.0-pro model
const geminiConfig = {
    MODEL_NAME : "gemini-1.0-pro",
    API_KEY : "AIzaSyA5LnlpAQHyDX5q3Ew5W_9valO8iVDQKBU"
}

//dialogflowConfig is the configuration object for the dialogflow CX
const dialogflowConfig = {
    credentials: {
        private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
    }
}

module.exports = {
    geminiConfig,
    dialogflowConfig
}