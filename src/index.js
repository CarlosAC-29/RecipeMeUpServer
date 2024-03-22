const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(require('./routes/index.routes'));
app.use(cors());

app.listen(port, () => {
    console.log(`Server runing in port ${port}`)
}
)
