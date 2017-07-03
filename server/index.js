var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var db = require('../database-mysql');
var google = require('./middleware/googleAuth.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//var data = require('./middleware/thumbsData.js');

const port = process.env.PORT || 3000;

server.listen(port);

var lectureId = '';
var questionId = '';
var thumbs = '';
var instructorId = '';  // this will be the socket.id

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/login', (req, res) => {
  var googleResults;
  google.verifyToken(req.query.tokenId, '430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com')
  .then(fromGoogle => {
    googleResults = fromGoogle;
    return db.getUserType(fromGoogle.gmail);
  })
  .then(result => {
    console.log(result);
    if (result.length === 0) {
      //add user to db
      console.log(`add user to db, ${googleResults.gmail}`);
      return db.addStudent(googleResults.first, googleResults.last, googleResults.gmail);
    } else {
      res.status(200).send(result);
    }
  })
  .then(result => {
    console.log(result);
    return db.getUserType(googleResults.gmail);
  })
  .then(result => {
    res.status(201).send(result);
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
    thumbs = new ThumbsData(lectureId, questionId);
    //Emit the new question to students here
    io.emit('checkingThumbs', { questionId: questionId });
    //This will add thumbsdata in the db after the question ends
    db.asyncTimeout(12000, () => {
      for (let student in thumbs.students) {
        //console.log(`${thumbs.students[student].gmail}, ${thumbs.questionId}, ${thumbs.students[student].thumbValue}`);
        db.createThumbData(thumbs.students[student].gmail, thumbs.questionId, thumbs.students[student].thumbValue);
      }
    });
    //send the response to the teacher
    res.send({ questionId: questionId });
  })
})

app.post('/endLecture', (req, res) => {
  let lecture = req.query.lectureId;
  // calculate the average for all thumbs in lecture
  // and store it in the database
  io.emit('lectureEnded', { response: 'ok' });
  res.status(200).send('end lecture');
});

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
      let student = new Student(socket.username, socket.id);
      thumbs.addStudent(student);
    }
    thumbs.setThumbValueForStudent(socket.username, data.thumbValue);
    let average = thumbs.getAverageThumbValue();
    io.emit('averageThumbValue', { averageThumbValue: average });
    console.log(`sending averageThumbValue of ${average}`);
    console.log(`thumb value for ${socket.username} is ${data.thumbValue}`);
  })
});

class ThumbsData {
  constructor(lectureId, questionId, instructor) {
    this.lectureId = lectureId;
    this.questionId = questionId;
    this.students = {};
    this.instructor = instructor;
  }

  //adds a student to the data structure
  addStudent(student) {
    this.students[student.gmail] = student;
  }

  //sets the thumb value for the student
  setThumbValueForStudent(gmail, thumbValue) {
    this.students[gmail].thumbValue = thumbValue;
  }

  //returns the average thumb value
  getAverageThumbValue() {
    let count = 0;
    let total = 0;
    for (let student in this.students) {
      if (this.students[student].thumbValue) {
        count++;
        total += this.students[student].thumbValue;
      }
    }
    return total / count;
  }

  //check if a student is connected
  hasStudent(gmail) {
    return this.students.hasOwnProperty(gmail);
  }
}

class Student {
  constructor(gmail, socketId) {
    this.gmail = gmail;
    this.socketId = socketId;
    this.thumbValue = null;
  }
}
