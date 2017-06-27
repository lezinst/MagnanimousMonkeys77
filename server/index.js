var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var GoogleAuth = require('google-auth-library');

var auth = new GoogleAuth;
var client = new auth.OAuth2('430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com', '', '');

var items = require('../database-mysql');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/login', (req, res) => {
  client.verifyIdToken(
    req.query.tokenId,
    '430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com',
    function(e, login) {
      console.log(login);
      var payload = login.getPayload();
      var userid = payload['email'];
      console.log(userid);
    }
  );
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

