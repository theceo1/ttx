require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const PORT = 5001;
const MONGODB_URI = process.env.MONGODB_URI;

console.log(`Connecting to MongoDB with URI: ${MONGODB_URI}`);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// HTTPS server options
const options = {
  key: fs.readFileSync('ssl/private-key.pem'),
  cert: fs.readFileSync('ssl/certificate.pem'),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
