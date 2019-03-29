import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  active: Boolean,
  updated: { type: Date, default: Date.now() },
  schedule: { type: Date, required: true }
});

export default mongoose.model('ScheduleModel', schema);