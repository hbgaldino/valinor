const getSchedules = (req, res, next) => {
  res.sendStatus(200);
  next();
}

module.exports = { 
  getSchedules
}