// Controller is request-response handler
// importing the model schema
const Subscriber = require('../models/subscribers');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/custom-error');

// gets all the subscribers
const getSubscribers = asyncWrapper(async (req, res) => {
  const subscriber = await Subscriber.find({});
  //  {} passed in find method means that it doesn't have any conditions,
  //  so it retrieves all subscribers by default.
  res.status(200).json({ subscriber });
});

// gets the subscriber that has name and subcribedChannel only.
const getSubscribersNames = asyncWrapper(async (req, res) => {
  const subscriber = await Subscriber.find(
    {},
    // it means that it will match and return all documents in the Subscriber collection.
    { _id: 0, name: 1, subscribedChannel: 1 }
    // second argument of find is a projection { _id: 0, name: 1, subscribedChannel: 1 }.
    // This means the query will only return the name and subscribedChannel fields of the
    // matched documents, and it will not return the _id field
  );
  res.status(200).json(subscriber);
});

// gets a single subscriber by id
// if not found a message will be send
const getSubscribersByID = asyncWrapper(async (req, res, next) => {
  // by Destructuring req.params.id
  const { id: subscriberID } = req.params;
  const subscriber = await Subscriber.findOne({ _id: subscriberID });
  // if the subscriber is not present it will go to the next operation which is a middleware functionality
  // and will go to createCustomError which will give us an error message with status code.
  if (!subscriber) {
    return next(createCustomError(`No task with id : ${subscriberID}`, 404));
  }
  res.status(200).json({ subscriber });
});

module.exports = {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
};
