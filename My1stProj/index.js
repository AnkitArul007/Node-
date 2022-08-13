
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('body-parser');

app.get('/login', (req, res)=>{
    res.sendFile('view/index.html', {root : __dirname})
});

app.post('/form', (req, res)=>{
    console.log(req.body)
    res.send('data-recieved')

});

app.listen('5000', ()=>{
    console.log('server started');
})

