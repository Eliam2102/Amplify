//Importaciones necesarias
const express = require('express');
const router = express.Router();


//Rutas necesarias
const login = require('./login');
const sigin = require('./sigin');
const index = require('./index');
const albumes = require('./albumes');
const buscar = require('./buscar');
const musica = require('./musica');
const playlists = require('./playlists');
const favoritas = require('./favoritas');

//Configura las rutas
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/albumes', albumes);
router.use('/buscar', buscar);
router.use('/musica', musica);
router.use('/playlists', playlists);
router.use('/favoritas', favoritas);
router.use('/', index);


module.exports = router;