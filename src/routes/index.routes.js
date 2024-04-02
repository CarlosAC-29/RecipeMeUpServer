const { Router } = require('express');
const router = Router();
const { geminiApi, dilogFlow, recieveAudio } = require('../controllers/index.cotrollers');
const fs = require('fs');
const multer = require('multer');
const path = require('path');


const audioUploadsDir = './uploads';

if (!fs.existsSync(audioUploadsDir)) {
    fs.mkdirSync(audioUploadsDir);
}


// Configura multer para guardar los archivos de audio en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, audioUploadsDir);
    },
    filename: function (req, file, cb) {
        // Cambia el nombre del archivo si lo deseas, aquí se utiliza el nombre original
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/api-chat', geminiApi);
router.post('/dialogflow', dilogFlow);
router.post('/audio', upload.single('audio'), recieveAudio);


module.exports = router;