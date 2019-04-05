import ScheduleModel from '../model/schedule';

export const getSchedules = async (req, res) => {

  try {
      const total = await ScheduleModel.countDocuments();
      const list = await ScheduleModel.find();

      return res.status(200).json({total: total, schedules: list});
  } catch (err) {
      console.log(err);
  }
};

export const getSchedule = (req, res) => {
  ScheduleModel.findOne({id: req.id, active: true}).then((response) => {
    return res.status(200).json(response);
  });
};

export const deleteSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};

export const postSchedule = (req, res, next) => {
  const schedule = new ScheduleModel(req.body);

  return schedule
    .save()
    .then((newSchedule) => {
      return res.status(201).json(newSchedule);
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).json({code: err.name, message: err.message});
      } 

      next(err);
    });
};

export const putSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};

export const patchSchedule = (req, res, next) => {
  res.sendStatus(200);
  next();
};