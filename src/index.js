const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(require('./routes/index.routes'));
app.use(cors());
const { config } = require('dotenv');
config();
console.log(process.env.HOLA);

app.listen(port, () => {
    console.log(`Server runing in port ${port}`)
}
)
