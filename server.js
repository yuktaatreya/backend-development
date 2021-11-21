require('dotenv').config();
const express = require('express');
const cors = require('cors');
var bodyParser= require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/",bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/exerciseTracker.html');
});

require('./routes/urlShortener')(app);
require('./routes/timestamp')(app);
require('./routes/headerParser')(app);
require('./routes/exerciseTracker')(app);
require('./routes/filemetadata')(app);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
