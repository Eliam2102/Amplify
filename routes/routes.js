//Importaciones necesarias
const express = require('express');
const router = express.Router();


//Rutas necesarias
const login = require('./login');
const sigin = require('./sigin');
const index = require('./index');

//Configura las rutas
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/', index);

module.exports = router;