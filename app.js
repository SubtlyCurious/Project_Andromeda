const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

//Initializing Routes
const homepageRoute = require('./routes/homepage');
const careers = require('./routes/careers');
const contactRoute = require('./routes/contact');

//Connecting CSS
app.use(express.static(path.join(__dirname,'public')));

//Connecting Img
app.use(express.static(path.join(__dirname, 'img')))

//Connecting JavaScript Logic
app.use(express.static(path.join(__dirname, 'logic')));

//Connecting Routes
app.use(homepageRoute);
app.use(careers);
app.use(contactRoute);

app.listen(port, () => {
    console.log(`Listening to server on port ${port}.`);
})
