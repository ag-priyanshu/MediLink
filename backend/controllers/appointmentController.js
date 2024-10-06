
const Appointment = require('../models/appointmentModel');


// save appointment

const saveAppointment=async(req,res)=> {
    const { name,phone, address, date, description, catagary } = req.body;
    const appointment = new Appointment({ name, phone, address, date, uid:req.user._id, description, catagary });
    try {
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get all appointments by user

const getAppointmentsByUser=async(req,res)=> {
    console.log(req.user._id);
    try {
        const appointments = await Appointment.find({ uid: req.user._id });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    saveAppointment,
    getAppointmentsByUser
}
