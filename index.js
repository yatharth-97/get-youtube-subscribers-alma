require('dotenv').config();

const express = require('express');
const app = require('./src/app');
const mongoose = require('mongoose');
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = `mongodb+srv://yatharthshahrawat97:${process.env.PASS}@nodeexpressprojects.6n4kl6k.mongodb.net/?retryWrites=true&w=majority`;
//* used mongoDB driver
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to database'));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
