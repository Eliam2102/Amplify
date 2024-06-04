//Importaciones necesarias
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



//Rutas necesarias
const login = require('./login');
const sigin = require('./sigin');
const index = require('./index');
const albumes = require('./albumes');
const buscar = require('./buscar');
const musica = require('./musica');
const playlists = require('./playlists');
const favoritas = require('./favoritas');
const registrarUsuario = require('./registrar-usuario');


//Configura las rutas
router.use('/login', login);
router.use('/sigin', sigin);
router.use('/albumes', albumes);
router.use('/buscar', buscar);
router.use('/musica', musica);
router.use('/playlists', playlists);
router.use('/favoritas', favoritas);
router.use('/registrar-usuario', registrarUsuario);
router.use('/', index);



module.exports = router;