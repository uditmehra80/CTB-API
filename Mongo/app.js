var express = require('express');
var app = express();
var bodyParser =require('body-parser');
var mongoose = require('mongoose');
var Book = require('./BookModel');

var DbUrl = 'mongodb://127.0.0.1:27017/example';
//when facing compile time error
var whenFindEroor = {useNewUrlParser: true , useUnifiedTopology: true}; 

mongoose.connect(DbUrl, whenFindEroor );

app.get('/',function(req,res){
   
    res.send('<h2>its Working<h2/> <a href="http://localhost:3001/books">Click to Get Data from Mongo</a>');
});

app.get('/books',function(req,res){
    console.log('getting books');
    Book.find({})
    .exec(function(err,books){
        if(!err){
            console.log(books);
            res.send(books);
        }else{
            res.send("Error find");
            console.log(err);
        }
    })
});


const PORT = 3001;

app.listen(PORT,function(){
    console.log(`Server Running on port : http://localhost:${PORT}`)
})