var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USERNAME || 'root',
  password : process.env.DB_PASSWORD || 'plantlife',
  database : process.env.DB_NAME || 'thumbscheck'
});

console.log(`db connection: DB_HOST ${process.env.DB_HOST}, DB_USERNAME ${process.env.DB_USERNAME}, DB_PASSWORD ${process.env.DB_PASSWORD}, DB_NAME ${process.env.DB_NAME}`);

const getUserType = function(gmail) {
  return new Promise ((resolve, reject) => {
    connection.query(`SELECT user_type FROM users WHERE gmail = "${gmail}"`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        resolve(results);
      }
    });
  })
}
module.exports.getUserType = getUserType;