const express = require('express');
const dotenv = require('dotenv');
const chatRoutes = require('../binAI/routes/chatRoutes'); // ruta a tu archivo de rutas
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
/**
 * app.use(cors({
  origin: 'http://localhost:5500' // o el puerto donde está tu HTML/React
}));

 */
app.use(express.json());

// Ruta base para el endpoint de chat
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
