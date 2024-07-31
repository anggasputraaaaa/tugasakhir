const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  ultra: Number,
  temperature: Number,
  pressure: Number,
  rainfall: Number,
  wind:Number,
  anemo:Number,
  ldr:Number,
  humidity:Number,
  date: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('SensorDataf', SensorDataSchema);