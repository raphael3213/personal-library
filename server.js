// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose=require('mongoose')
var bp=require('body-parser');
var helmet=require('helmet');


app.use(bp.json())
app.use(bp.urlencoded({extended:false}));
app.use(helmet());
app.use(express.static('public'));

mongoose.connnect()

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
