const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilitar CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Permitir los métodos HTTP especificados
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Permitir los encabezados especificados
    next();
});

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
