const express= require('express');
const app= new express();
//const port=process.env.PORT || 2000;
const port=2000;
const dataModel = require('./src/models/dataModel');
const cors=require('cors');
var bodyParser = require('body-parser');

//var app=new express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req,res)
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS')
    dataModel.booksData.find().then(function(details){
        res.send(details);
    });
    
});

app.get('/books', function(req,res)
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS')
    dataModel.booksData.find().then(function(details){
        res.send(details);
    });
    
});

app.get('/books/:bookIndex', function(req,res)
{
    const bookIndex=req.params.bookIndex;
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS')
    dataModel.booksData.findOne({_id:bookIndex}).then(function(details){
        res.send(details);
    });
    
});

app.get('/authors', function(req,res)
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS')
    dataModel.authorData.find().then(function(details){
        res.send(details);
    });
    
});
app.get('/authors/:authorIndex', function(req,res)
{
    const authorIndex=req.params.authorIndex;
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS')
    dataModel.authorData.findOne({_id:authorIndex}).then(function(details){
        res.send(details);
    });
    
});

app.listen(port, ()=>{console.log("Server ready at "+port )});  
