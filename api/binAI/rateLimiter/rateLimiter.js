const rateLimit = require('express-rate-limit');

function createRateLimiter({ windowMs = 15 * 60 * 1000, max = 10, message } = {}) {
  return rateLimit({
    windowMs,
    max,
    handler: (req, res) => {
      res.status(429).json({
        error: true,
        message: message || 'Has excedido el número de solicitudes permitidas. Por favor, intenta más tarde.'
      });
    }
  });
}

module.exports = createRateLimiter;
