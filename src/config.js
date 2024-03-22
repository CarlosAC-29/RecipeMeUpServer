
//geminiConfig is the configuration object for the gemini-1.0-pro model
const geminiConfig = {
    MODEL_NAME : "gemini-1.0-pro",
    API_KEY : "AIzaSyA5LnlpAQHyDX5q3Ew5W_9valO8iVDQKBU"
}

//dialogflowConfig is the configuration object for the dialogflow CX
const fs = require('fs');
const CREDENTIALS = JSON.parse(fs.readFileSync('./enviroment/credentials.json'));

const dialogflowConfig = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
}

module.exports = {
    geminiConfig,
    dialogflowConfig
}