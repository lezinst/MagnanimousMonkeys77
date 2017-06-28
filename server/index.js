var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var db = require('../database-mysql');
var google = require('./middleware/googleAuth.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 3000;

server.listen(port);


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

app.post('/lecture', (req, res) => {
  let name = req.query.name;
  db.createNewLecture(name)
  .then(results => {
    //console.log(results.insertId);
    res.send({ lectureId: results.insertId});
  })
})


io.on('connection', function (socket) {
  console.log(`socket: ${socket}`);
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// app.listen(port, function() {
//   console.log(`listening on port ${port}!`);
// });

