import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var subSchema = new Schema({
  _id: {type: Schema.ObjectId, auto: true, unique: true},
  dateTime: { type: Date , required: true},
  status: { type: String, required:true, enum: {values: ['DELAYED', 'ONTIME', 'CANCELED'], message: "Only permitted status in: 'DELAYED', 'ONTIME', 'CANCELED'}"}}
});

var schema = new Schema({
  _id: {type: Schema.ObjectId, auto: true},
  name: { type: String, min: [10]},
  active: { type: Boolean, default: true },
  updated: { type: Date, default: Date.now() },
  schedules: [subSchema]
});

export default mongoose.model('ScheduleModel', schema);