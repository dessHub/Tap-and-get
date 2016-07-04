   var express  = require('express');
   var bodyParser   = require('body-parser');           //
   var app      = express();                               // create our app w/ express
   var mongoose = require('mongoose');                     // mongoose for mongodb
   var morgan = require('morgan');             // log requests to the console (express4)
   var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
   var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


app.use(bodyParser());

   // configuration =================

   var configDB = require('./config/database.js');
   mongoose.connect(configDB.url);   // connect to Mongodb database

   app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
   app.use(morgan('dev'));                                         // log every request to the console
   app.use(bodyParser.json());                                     // parse application/json
   app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
   app.use(methodOverride());

//seting up our mongose model
   var Values = mongoose.model('Values',{
     num1      : [Number],
     num2      : [Number],
     result    : [Number],
     timestamp : [Date]
   });

   // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all values
    app.get('/api/values', function(req, res) {

        // use mongoose to get all values in the database
        Values.find(function(err, values) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(values); // return all valuess in JSON format
        });
    });

    // create values and send back all values after creation
    app.post('/api/values', function(req, res) {

        // create a values, information comes from AJAX request from Angular
        Values.create({
            num1 : req.body.num1,
            num2 : req.body.num2,
            result : req.body.result,
            timestamp : req.body.timestamp,
            done : false
        }, function(err, value) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Values.find(function(err, values) {
                if (err)
                    res.send(err)
                res.json(values);
            });
        });

    });

    app.get('*',function(req, res){
         res.sendfile('./public/kalk.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

  // listen (start app with node server.js) ======================================
   app.listen(8080);
   console.log("Get it all on port 8080");
