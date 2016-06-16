// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var nodemailer = require('nodemailer');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configuration
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json



// listen (start app with node server.js) ======================================
app.listen(80);
console.log("App listening on port 80");

var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "stormcloudtechno@gmail.com",
      pass: "gostormcloud89"
    }
});

app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

// post ad
app.post('/api/sendMail', function(req, res) {
        // send mail
      var msg = {
        html: "<b>Hello,</b><p><strong>Name: </strong>" + req.body.name + "</p><p><strong>Email: </strong>" + req.body.email + "</p><p><strong>Phone: </strong>" + req.body.phone + "</p><p><strong>Message: </strong>" + req.body.message + "</p>",
        createTextFromHtml: true,
        from: "<stormcloudtechno@gmail.com>",
        to: "<siddharthmane89@gmail.com>",
        subject: "Message from StormCloud website"
      };
      transport.sendMail(msg, function (err) {
        if (err) {
          console.log("====err=======",err);
          return;
        }
        return res.json({"message":"Your message sent successfully."});
      });
});