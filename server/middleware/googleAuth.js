var GoogleAuth = require('google-auth-library');

var auth = new GoogleAuth;
var client = new auth.OAuth2('430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com', '', '');



const verifyToken = function(token, clientID) {
  return new Promise ((resolve, reject) => {
    client.verifyIdToken(
      token, 
      clientID,
      (e, login) => {
        if (login) {
         var payload = login.getPayload();
         var gmail = payload['email'];
         resolve(gmail);
       } else {
        reject("invalid token");
       }
      }
    )
  })
}

module.exports.verifyToken = verifyToken;

