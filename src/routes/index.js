import express from 'express';
import { getSchedule, getSchedules, deleteSchedule, postSchedule, putSchedule, patchSchedule } from '../controller';

const router = express.Router();

router.get("/schedules", getSchedules);
router.get("/schedules/:id", getSchedule);
router.delete('/schedules/:id', deleteSchedule);
router.post("/schedules", postSchedule);
router.put("/schedules/:id", putSchedule);
router.patch("/schedules/:id", patchSchedule);

export default router;