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
    let lectureId = results.insertId;
    res.send({ lectureId: lectureId });
    //set lectureID of current lecture varaible on server?
    io.emit('lectureStarted', { lectureId: lectureId })
  })
})

app.post('/checkthumbs', (req, res) => {
  let lecture = req.query.lecture_id;
  db.createNewQuestion(lecture)
  .then(results => {
    let questionId = results.insertId;
    //Emit the new question to students here

    //send the response to the teacher
    res.send({ questionId: questionId });
  })
})

//this just tests generic socket.io functionality
io.on('connection', function (socket) {
  console.log(`socket: ${socket}`);
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('username', function(data) {
    console.log('username', data);
    socket.username = data.username;
  })
});

// app.listen(port, function() {
//   console.log(`listening on port ${port}!`);
// });
