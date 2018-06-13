// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose=require('mongoose')
var bp=require('body-parser');
var helmet=require('helmet');
var books=require('./models/book');

app.use(bp.json())
app.use(bp.urlencoded({extended:false}));
app.use(helmet());
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

console.log(req.body);
  
  var newBook=new books;
  newBook.title=req.body.title;
  newBook.comments=[];
  newBook.id1=Math.round(Math.random*100000000);
  res.json(newBook);

})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
