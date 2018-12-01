'use strict';

//Node Modules
//dependencies

require('dotenv').config();
const express = require('express');

//app 
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(' ./public'));

app.get('/hello', (request, response) => {
    response.status(200).send('hello');
});

// app.get 

app.use('*', (req, res) => {
    res.send('sorry that didn\'t work');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
