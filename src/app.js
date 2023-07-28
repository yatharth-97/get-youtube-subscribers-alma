const express = require('express');
const app = express();
// Your code goes here
//------------------------------------------------------------------------------
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Parses JSON coming from API
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main Route
app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Hey this is a REST API by Yatharth Shahrawat for getting info of Youtube Subscribers'
    );
});

const subscribersRoute = require('./routes/subscribersRoute');
// Middleware route
app.use('/', subscribersRoute);
// custom middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app;
