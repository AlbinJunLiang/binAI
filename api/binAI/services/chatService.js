require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_SECRET_KEY);
const modelName = process.env.GENERATIVE_AI_MODEL; // por ejemplo: "gemini-1.5-flash"

async function getResponseFromGemini(prompt) {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();
    return text;
}

module.exports = { getResponseFromGemini };
