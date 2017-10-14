'use strict';

var Promise = require('promise');
var mongoose = require('mongoose'),
Day = mongoose.model('Days'),
User = mongoose.model('Users');

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


exports.get_days_by_user = function(req, res){
  Day.find({user_id:req.params.userId}, function(err, day) {
    if (err)
      res.send(err);
    res.json(day);
  });
};


exports.get_status_time = function(req, res){
  Day.find({user_id:req.params.userId, day:{$gte: req.params.start, 
            $lt: req.params.end}}, function(err, days) {
    if (err)
      res.send(err);
    
    var amount = 0;
    days.forEach(function get_inputs_of_a_day(day) {
        if(day.status === 1){
          day.inputs.forEach(function get_input_item(item) {
              if(item.type===0){
                  amount+=new Date(item.out).getHours()-new Date(item.enter).getHours();
              }
        });
       }
    });      

    var number_of_hours = 0;
    Promise.resolve(get_hours_per_day(req.params.userId)).then(function(hours_per_day){
        number_of_hours = hours_per_day * days.length
        res.json(amount-number_of_hours); 
    });  
  });
};


var get_hours_per_day = function(user_id){
  return new Promise(function(resolve, reject) {
    User.findById(user_id, function (err, user) {
      if (err) reject(err);
      resolve(user.hours_per_day);
    });
})}