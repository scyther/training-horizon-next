require('dotenv').config();
const mongoose = require('mongoose');

const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.connect(CONNECTION_URL);

module.exports = mongoose;