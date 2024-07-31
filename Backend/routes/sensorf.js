const express = require('express');
const router = express.Router();
const SensorDataf = require('../models/sensordataf');

// Endpoint POST untuk menyimpan data sensor
router.post('/data', async (req, res) => {
  const { ultra, temperature, pressure, humidity, rainfall, wind, anemo, ldr } = req.body;

  const now = new Date();
  // Menambahkan 8 jam ke waktu UTC
  const utcOffset = now.getTime() + (now.getTimezoneOffset() * 60000);
  const witaTime = new Date(utcOffset + (8 * 3600000));

  // Mendapatkan tanggal dalam format DD/MM/YYYY
  const date = witaTime.toLocaleDateString('en-GB');

  // Mendapatkan waktu dalam format HH:MM:SS
  const time = witaTime.toTimeString().split(' ')[0];

  try {
    const newSensorData = new SensorDataf({
      ultra,
      temperature,
      pressure,
      humidity,
      rainfall,
      wind,
      anemo,
      ldr,
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
    const data = await SensorDataf.find({});
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving data: ' + error.message);
  }
});

module.exports = router;
