const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const songController = require ('../controllers/songController.js');

router.post('/songs/addSong', songController.agregarCancion);
router.get('/songs/', songController.getCanciones);