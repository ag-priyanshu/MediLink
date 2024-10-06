const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        uid:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        catagary:{
            type:String,
            required:true
        }
    
    });

module.exports = mongoose.model('Appointment', appointmentSchema);

