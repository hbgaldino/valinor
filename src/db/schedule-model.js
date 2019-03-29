var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  active: Boolean,
  updated: { type: Date, default: Date.now() },
  schedules: { type: Date }
});

module.exports = mongoose.model('ScheduleModel', schema);