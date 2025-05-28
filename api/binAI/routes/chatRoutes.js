const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController'); // ruta relativa al archivo actual
const createRateLimiter = require('../rateLimiter/rateLimiter');

const limiterForEndpoint = createRateLimiter({
    max: 3,                  // máximo 5 solicitudes
    windowMs: 60 * 60 * 1000  // ventana de 60 minutos (2 minutos * 60 segundos * 1000 ms)
})

router.post('/', limiterForEndpoint, chatController.getChatResponse);

module.exports = router;
