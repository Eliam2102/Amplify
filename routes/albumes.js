const express = require('express');
const router = express.Router();

//Exihibe la pagína al puerto destinado
router.get('/', (req, res, next) => {
    res.render('albumes', {title: 'Amplify',});
    next()
});

module.exports = router;