'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the user'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the user'
  },
  password: {
    type: String,
    required: 'Kindly enter the password of the user'
  },
  hours_per_day: {
    type: Number,
    required: 'Kindly enter the hours per day of the user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);