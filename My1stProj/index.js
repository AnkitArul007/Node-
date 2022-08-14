
const express = require('express');
const port = process.env.PORT || 5000; // our port number where our server will be created
const bodyParser = require('body-parser');
const db = require('mongoose');
const app = express();  // this is our app or instance of express
const fs = require('fs');


//API middlewares::

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));  // this is to decode the data send through html form

//API routes::

app.get('/login', (req, res)=>{
    res.sendFile('view/index.html', {root : __dirname})
});

app.post('/form', (req, res)=>{
    console.log(req.body); // the data we get is in body of the request
    res.send('data-recieved');

    fs.appendFile('text.txt', JSON.stringify(req.body).toLocaleLowerCase(), (err)=>{
        if (err) throw err;
        console.log("successful");
    })
});

app.listen(port, ()=>{
    console.log('server started');
});

