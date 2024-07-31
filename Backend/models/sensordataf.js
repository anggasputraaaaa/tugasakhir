const mongoose = require('mongoose');

const SensorDatafSchema = new mongoose.Schema({
  ultra: Number,
  temperature: Number,
  pressure: Number,
  humidity: Number,
  rainfall: Number,
  wind: Number,
  anemo: Number,
  ldr: Number,
  date: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('SensorDataf', SensorDatafSchema);
