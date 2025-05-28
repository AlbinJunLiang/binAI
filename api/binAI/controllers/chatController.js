const { getResponseFromGemini } = require('../services/chatService');
const { perfilAlbin } = require('../services/albinServices');

async function getChatResponse(req, res) {
    const { prompt, usePerfil } = req.body;

    if (!prompt) return res.status(400).json({ message: 'Mensaje requerido' });
    if (prompt.length > 125) return res.status(400).json({ message: 'El mensaje no debe superar los 125 caracteres' });

    try {
        const input = usePerfil ? `${perfilAlbin} Pregunta: ${prompt}` : prompt;
        const response = await getResponseFromGemini(input);
        console.log(response);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al contactar con Gemini' });
    }
}

module.exports = { getChatResponse };
