const express = require('express');
const router = express.Router();

//Exihibe la pagína al puerto destinado
router.get('/', (req, res, next) => {
    res.render('buscar', {title: 'Amplify',});
    next()
});

module.exports = router;