const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/careers', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'careers.html'));
})

router.get('/careers/apply', (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','apply.html'))
})

router.get('/careers/engineer', (req,res,next) => {
    res.redirect(path.join(__dirname, '..', 'views', 'homepage.html'))
})

module.exports=router;
