//Importaciones necesarias
const express = require('express');
const router = express.Router();


//Rutas necesarias
const login = require('./login');
const sigin = require('./sigin');
const index = require('./index');
const albumes = require('./albumes');
const buscar = require('./buscar');

//Configura las rutas
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/albumes', albumes);
router.use('/buscar', buscar);
router.use('/', index);


module.exports = router;