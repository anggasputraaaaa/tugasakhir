const express = require('express');
const router = express.Router();
const SensorData = require('../models/sensordata');

// Endpoint POST untuk menyimpan data sensor
router.post('/data', async (req, res) => {
  const { distance, temperature, humidity, rainfall } = req.body;

  const now = new Date();
  const date = now.toLocaleDateString('en-GB');// Format YYYY-MM-DD
  const time = now.toTimeString().split(' ')[0]; // Format HH:MM:SS

  try {
    const newSensorData = new SensorData({
      distance,
      temperature,
      humidity,
      rainfall,
      date,
      time
    });

    await newSensorData.save();
    res.status(201).send('Data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving data: ' + error.message);
  }
});

// Endpoint GET untuk mengambil data sensor
router.get('/data', async (req, res) => {
  try {
    const data = await SensorData.find({});
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving data: ' + error.message);
  }
});

module.exports = router;
