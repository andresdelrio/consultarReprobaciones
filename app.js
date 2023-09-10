const express = require('express');
const userRoutes = require('./router/userRoutes');
const cors = require('cors');

const app = express();

// Configuración de CORS con la configuración predeterminada
app.use(cors());

// Middleware para parsear el body de las peticiones
app.use(express.json());

// Usar las rutas definidas
app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
