// web.js
var express = require('express');
var logfmt = require('logfmt');
var passport = require('passport');
var util = require('util');
var InstagramStrategy = require('passport-instagram').Strategy;

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
    callbackURL: "http://localhost:5000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


var app = express();

//var app = express.createServer();

// configure Express
// app.configure(function() {
 

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');

  app.use(bodyParser());
  app.use(methodOverride());
  // app.use(app.router);
  app.use(function(err, req, res, next){
    // logic
  });

  // app.use(express.logger());
  // app.use(express.cookieParser());
  // app.use(express.bodyParser());
  // app.use(express.methodOverride());
  // app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(app.router);
  // app.use(express.static(__dirname + '/public'));
// });


app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/instagram
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Instagram authentication will involve
//   redirecting the user to instagram.com.  After authorization, Instagram
//   will redirect the user back to this application at /auth/instagram/callback
app.get('/auth/instagram',
  passport.authenticate('instagram'),
  function(req, res){
    // The request will be redirected to Instagram for authentication, so this
    // function will not be called.
  });

// GET /auth/instagram/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// app.listen(3000);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}


app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});








