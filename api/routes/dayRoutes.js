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


  app.route('/get_days_by_user/:userId')
    .get(days.get_days_by_user);


  app.route('/get_status_time/:userId&:start&:end')
    .get(days.get_status_time);

  app.route('/get_status_time_by_id/:userId')
    .get(days.get_status_time_by_id);

};