'use strict';
module.exports = function(app) {
  var days = require('../controllers/daysController');

  // todoList Routes
  app.route('/days')
    .get(days.list_all_days)
    .post(days.create_a_day);


  app.route('/days/:dayId')
    .get(days.read_a_day)
    .put(days.update_a_day)
    .delete(days.delete_a_day);
};