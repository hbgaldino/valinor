import mongoose from 'mongoose';
import ScheduleModel from '../model/schedule';

const getSchedules = (req, res) => {

  ScheduleModel.find()
    .then((list) => {
      return res.status(200).json({
        schedules: list
      });
    });
};

const getSchedule = (req, res) => {
  ScheduleModel.findOne({id: req.id, active: true}).then((response) => {
    return res.status(200).json(response);
  });
};

const deleteSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};

const postSchedule = (req, res) => {

  const schedule = new ScheduleModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    active: req.body.active,
    schedule: req.body.schedule
  });

  return schedule
    .save()
    .then((newSchedule) => {
      return res.status(201).json(newSchedule);
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Server error. Try again',
        description: error.message
      });
    });
};

const putSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};

const patchSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};


export {
  getSchedules,
  getSchedule,
  deleteSchedule,
  postSchedule,
  putSchedule,
  patchSchedule
}