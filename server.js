// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose=require('mongoose')
var bp=require('body-parser');
var helmet=require('helmet');
var books=require('./models/book');
var alert=require('alert-node')
app.use(bp.json())
app.use(bp.urlencoded({extended:false}));

app.use(helmet.noCache());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI,function(err){

  if(err){console.log(err)}
console.log("Mongo connected")
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/addbooks',function(req,res,next){

 if(req.body.title=""){
  res.json({error:"Enter a valid title"})
  }
  
  var newBook=new books;
  newBook.title=req.body.title;
  newBook.comment=[];
  newBook.book_id=Math.round(Math.random()*100000000);
 newBook.save(function(err){
 
 if(err){console.log(err)}
 
 })
  
  res.json(newBook);

})


app.post('/addcomm',function(req,res,next){
console.log(req.body);
books.findOne({book_id:req.body.book_id},function(err,doc){

if(err){console.log(err)}
var arr=doc.comment;
  
  doc.comment.push(req.body.comment);
  doc.save(function(err){
  if(err){console.log(err)}
    
    
    
    res.json(doc);
  
  })

})


})





app.get('/all',function(req,res,next){

books.find({},function(err,doc){

if(err){console.log(err)}
  
  res.json(doc);
})})



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

