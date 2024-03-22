const { Router } = require('express');
const router = Router();
const { geminiApi, dialogFlowApi } = require('../controllers/index.cotrollers');

router.post('/api-chat', geminiApi);
router.post('/dialogflow', dialogFlowApi);

module.exports = router;