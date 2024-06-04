// routes/sigin.js
const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
    res.render('reproductor', { title: 'Reproductor' });
});

module.exports = router;