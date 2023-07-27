const express = require('express');
const app = express();
// Your code goes here
//------------------------------------------------------------------------------

// Parses JSON coming from API
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const subscribersRoute = require('./routes/subscribersRoute');

// Middleware route
app.use('/', subscribersRoute);

// Main Route
app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Hey this is a REST API by Yatharth Shahrawat for getting info of Youtube Subscribers',
  });
});

module.exports = app;
