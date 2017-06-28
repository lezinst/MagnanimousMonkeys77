var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var db = require('../database-mysql');
var google = require('./middleware/googleAuth.js');

var items = require('../database-mysql');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/login', (req, res) => {
  google.verifyToken(req.query.tokenId, '430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com')
  .then(gmail => {
    db.getUserType(gmail)
    .then(result => {
     res.status(200).send(result);
    })
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

