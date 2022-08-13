
const express = require('express');
const app = express();

// app.use('body parser');

app.get('/login', (req, res)=>{
    res.sendFile('view/index.html', {root : __dirname})
});

app.post('/form', (req, res)=>{
    res.sendFile('view/fileInfo.html', {root : __dirname})
});

app.listen('5000', ()=>{
    console.log('server started');
})

