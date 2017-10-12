'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DaySchema = new Schema({
  day: {
    type: Date,
    required: 'Kindly enter the name of the day'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: 'Kindly enter the email of the day'
  },
  inputs: {
    type: Array,
    required: 'Kindly enter the password of the day'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Days', DaySchema);