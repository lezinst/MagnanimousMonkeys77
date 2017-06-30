var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var db = require('../database-mysql');
var google = require('./middleware/googleAuth.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var data = require('./middleware/thumbsData.js');

const port = process.env.PORT || 3000;

server.listen(port);

var lectureId = '';
var questionId = '';
var thumbs = '';
var instructorId = '';  // this will be the socket.id 

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
    lectureId = results.insertId;
    res.send({ lectureId: lectureId });
    io.emit('lectureStarted', { lectureId: lectureId })
  })
})

app.post('/checkthumbs', (req, res) => {
  let lecture = req.query.lecture_id;
  db.createNewQuestion(lecture)
  .then(results => {
    questionId = results.insertId;
    thumbs = new data.ThumbsData(lectureId, questionId);
    //Emit the new question to students here
    io.emit('checkingThumbs', { questionId: questionId });
    //send the response to the teacher
    res.send({ questionId: questionId });
  })
})

io.on('connection', function (socket) {
  console.log(`socket: ${socket}`);

  //put the gmail username on each socket that is connected
  socket.on('username', function(data) {
    console.log('username', data);
    socket.username = data.username;
  });

  socket.on('instructor', data => {
    instructorId = socket.id;
    socket.instructor = data.username;
    console.log(`the instructor is: ${socket.instructor}`);

  })

  //recieve the thumb value from the student
  socket.on('thumbValue', data => {
    if (!thumbs.hasStudent(socket.username)) {
      let student = new data.Student(socket.username, socket.id);
      thumbs.addStudent(student);
    }
    thumbs.setValueForStudent(socket.username, data.thumbValue);
    io.sockets.connected[instructorId].emit('averageThumbValue', { value: thumbs.getAverageThumbValue() });
    console.log(`thumb value for ${socket.username} is ${data.thumbValue}`);
  })
});







