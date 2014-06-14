// web.js
var express = require('express');
var logfmt = require('logfmt');
var app = express();

// Instagram = require('instagram-node-lib');

// Instagram.set('client_id', 'f076148c8e754df8bc5051aea065512e');
// Instagram.set('client_secret', 'adcce693c0924207964584b426bf0a6b');

// Instagram.tags.info({
//   name: 'blue',
//   complete: function(data){
//     console.log(data);
//   }
// });


// var request = require('request');
// var url = "https://api.instagram.com/v1/media/popular";
// var params = {
// 	client_id: "f076148c8e754df8bc5051aea065512e"
// }

// var qs = require('querystring');

// module.exports.instagramPictures = function(callback) {
// 	request({
// 		url: url + '?' + qs.stringify(params),
// 		json: true,
// 		timeout: 30000
// 	}, function(error, response, body) {
// 		if (error) {
// 			return console.log("CRAP");
// 		}

// 		var data = (body.data.map(function(inst) { 
// 			return inst.images.standard_resolution.url; 
// 		}));

// 		console.log(body.data);

// 		callback(data);
// 	});
// }


app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});








