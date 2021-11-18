require('dotenv').config();
const express = require('express');
const cors = require('cors');
var bodyParser= require('body-parser');
var time = require("./timeUtil.js");
const app = express();
var urls=[];
var nextShort=0;
var index;
var isValidUrl=function isUrl(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
};

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/",bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/urlshortener.html');
});
app.get('/urlShortener', function(req, res) {
  res.sendFile(process.cwd() + '/views/urlshortener.html');
});
app.get('/headerParser', function(req, res) {
  res.sendFile(process.cwd() + '/views/headerparser.html');
});
app.get('/timestampMicroservice', function(req, res) {
  res.sendFile(process.cwd() + '/views/timestamp.html');
});
app.get('/exercisetracker', function(req, res) {
  res.sendFile(process.cwd() + '/views/exercisetracker.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});
app.post('/api/shorturl', function(req, res) {
  console.log(req.body);
  var userUrl=req.body.url;
  if(isValidUrl(userUrl)){
    if(userUrl in urls)
  {
    index=urls.indexOf(userUrl);
  }
  else {
    urls.push(userUrl);
    nextShort=urls.indexOf(userUrl);
    index=nextShort;
    nextShort++;
  }
  
  res.json({ original_url : userUrl, short_url : index });
}
else{
  res.json({ error: 'invalid url' });
}
});
app.get('/api/shorturl/:shortUrl?', function(req, res) {

  var shortUrl=req.params.shortUrl;
  var original_url = urls[shortUrl];
  console.log(original_url);
  if(original_url==undefined){
    res.send("error");
  }
  else {
    res.redirect(urls[shortUrl]);
    
  }
});
app.get("/api/whoami", function (req, res) {
  res.json({ipaddress: req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.get('User-Agent')
  });
});
app.get("/api/:date?",function(req,res){
  // var date= req.params.date;
  // var unix = new Date(date).getTime() / 1000;
  // var isoDateString = new Date(date).toISOString();
  res.json(time(req.params.date));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
