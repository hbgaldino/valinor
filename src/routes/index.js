const express = require('express');
const router = express.Router();
const busController = require("../controller");


router.get("/schedules", busController.getSchedules);

module.exports = router;