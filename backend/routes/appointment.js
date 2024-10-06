
const express = require('express');
const router = express.Router();
const AppointmentControllers = require('../controllers/appointmentController');
const requireAuth = require('../middleware/requireAuth');


router.use(requireAuth);
// save appointment

router.post('/save', AppointmentControllers.saveAppointment);

// get all appointments by user

router.get('/user', AppointmentControllers.getAppointmentsByUser);

module.exports = router;
