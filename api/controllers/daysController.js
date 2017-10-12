'use strict';


var mongoose = require('mongoose'),
Day = mongoose.model('Days');

exports.list_all_days = function(req, res) {
  Day.find({}, function(err, day) {
    if (err)
      res.send(err);
    res.json(day);
  });
};




exports.create_a_day = function(req, res) {
  var new_day = new Day(req.body);
  new_day.save(function(err, day) {
    if (err)
      res.send(err);
    res.json(day);
  });
};


exports.read_a_day = function(req, res) {
  Day.findById(req.params.dayId, function(err, day) {
    if (err)
      res.send(err);
    res.json(day);
  });
};


exports.update_a_day = function(req, res) {
  Day.findOneAndUpdate({_id: req.params.dayId}, req.body, {new: true}, function(err, day) {
    if (err)
      res.send(err);
    res.json(day);
  });
};


exports.delete_a_day = function(req, res) {


  Day.remove({
    _id: req.params.dayId
  }, function(err, day) {
    if (err)
      res.send(err);
    res.json({ message: 'day successfully deleted' });
  });
};


