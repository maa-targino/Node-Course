const express = require('express');
const app = express(); //Inicia o express

app.get('/home', function(req,res){
    console.log('GET required')
    res.send('<h1>Welcome to our home page!</h1>')
})

app.get('/contact', function(req,res){
    console.log('GET required')
    res.send('<h1>Welcome to our contact page!</h1><h2>Please leave a message.</h2>')
})

app.listen(3000, function(erro){
    if(erro){
        console.log("An error has ocurred!")
    }else{
        console.log("Server initialized successfully!")
    }
})