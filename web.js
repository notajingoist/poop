// web.js
var express = require('express');
var logfmt = require('logfmt');
var passport = require('passport');
var util = require('util')

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });
// 
var INSTAGRAM_CLIENT_ID = "f076148c8e754df8bc5051aea065512e";
var INSTAGRAM_CLIENT_SECRET = "adcce693c0924207964584b426bf0a6b";


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://poopscoop.herokuapp.com/"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});








