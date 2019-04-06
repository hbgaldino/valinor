import ScheduleModel from '../model/schedule';

export const getSchedules = async (req, res, next) => {
  try {
    const total = await ScheduleModel.countDocuments();

    if(total === 0) 
      return res.sendStatus(204);

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;

    const list = await ScheduleModel.find().limit(pageSize).skip(pageSize * page).sort({updated: "asc"});

    return res.status(200).json({
      total: total,
      page: page,
      schedules: list
    });
  } catch (err) {
    next(err);
  }
};

export const getSchedule = async (req, res, next) => {
  try {
    console.info(`GET Schedule :id ${req.params.id}`);
    
    const item = await ScheduleModel.findOne({
      _id: req.params.id,
      active: true
    }, '_id name schedules updated');

    if(item) {
      return res.status(200).json(item);  
    } else {
      return res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

export const deleteSchedule = async (req, res, next) => {
  console.info(`DELETE Schedule :id ${req.params.id}`);

  try {
    const deleted = await ScheduleModel.findOneAndDelete({_id: req.params.id});


    if (deleted)
      res.status(200).json(deleted);
    else
      res.sendStatus(204);

  } catch(err) {
    next(err);
  }
};

export const postSchedule = (req, res, next) => {
  console.info(`POST Schedule`);
  const schedule = new ScheduleModel(req.body);

  return schedule
    .save()
    .then((newSchedule) => {
      return res.status(201).json(newSchedule);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({
          code: err.name,
          message: err.message
        });
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