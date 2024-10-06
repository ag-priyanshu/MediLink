require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const appointmentRoutes = require('./routes/appointment');

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
