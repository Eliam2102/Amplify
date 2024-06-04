const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare');

//Exihibe la pagína al puerto destinado
router.get('/',authMiddleWare.authenticate, (req, res, next) => {
    res.render('index', {title: 'Amplify',});
    next()
});

module.exports = router;