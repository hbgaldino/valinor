const express = require('express');
const router = express.Router();
const busController = require("../controller");

router.get("/schedules", busController.getSchedules);
router.get("/schedules/:id", busController.getSchedule);
router.delete('/schedules/:id', busController.deleteSchedule);
router.post("/schedules", busController.postSchedule);
router.put("/schedules/:id", busController.putSchedule);
router.patch("/schedules/:id", busController.patchSchedule);

module.exports = router;