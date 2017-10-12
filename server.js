var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
User = require('./api/models/userModel'), //created model loading here
Day = require('./api/models/dayModel'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
var promise = mongoose.connect('mongodb://localhost/timeclock', {
  useMongoClient: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var userRoutes = require('./api/routes/userRoutes'); //importing route
var dayRoutes = require('./api/routes/dayRoutes');
userRoutes(app);
dayRoutes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);


console.log('Time Clock RESTful API server started on: ' + port);
