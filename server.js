const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sensorRoutes = require('./routes/sensor');
const sensorRoutesf = require('./routes/sensorf');
require('dotenv').config(); // Tambahkan ini untuk memuat variabel lingkungan dari file .env

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI1 = process.env.MONGO_URI1;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/anra', sensorRoutes);
app.use('/fara', sensorRoutesf);

// Koneksi ke MongoDB
const db1 = mongoose.createConnection(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db1.on('connected', () => {
  console.log('Connected to MongoDB database 1');
});

db1.on('error', (error) => {
  console.error('Error connecting to MongoDB database 1:', error.message);
});

const db2 = mongoose.createConnection(MONGO_URI1, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db2.on('connected', () => {
  console.log('Connected to MongoDB database 2');
});

db2.on('error', (error) => {
  console.error('Error connecting to MongoDB database 2:', error.message);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
