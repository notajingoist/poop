// web.js
var express = require('express');
var logfmt = require('logfmt');
//var passport = require('passport');
//var passport = require('util')

var app = express();


app.use(logfmt.requestLogger());

app.use(express.static(__dirname));
// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });


// var INSTAGRAM_CLIENT_ID = "c2a3ed2b2a73461ab7ddd2831ba749af"
// var INSTAGRAM_CLIENT_SECRET = "620877302d314cb19d5e8bfb134accdd";




// passport.use(new InstagramStrategy({
//     clientID: INSTAGRAM_CLIENT_ID,
//     clientSecret: INSTAGRAM_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ instagramId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});