// Controller is request-response handler
// importing the model schema
const Subscriber = require('../models/subscribers');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/custom-error');

// gets all the subscribers
// it requests a data from resource
const getSubscribers = asyncWrapper(async (req, res) => {
  const subscriber = await Subscriber.find({});
  res.status(200).json({ subscriber });
});

// gets the subscriber that has name and subcribedChannel.
const getSubscribersNames = asyncWrapper(async (req, res) => {
  const subscriber = await Subscriber.find(
    {},
    // it means that it will match and return all documents in the Subscriber collection.
    { _id: 0, name: 1, subscribedChannel: 1 }
    // second argument to find is a projection { _id: 0, name: 1, subscribedChannel: 1 }.
    // This means the query will only return the name and subscribedChannel fields of the matched documents,
    // and it will not return the _id field
  );
  res.status(200).json(subscriber);
});

// gets subscriber by id  and subcribedChannel
// if not found a message will be send
const getSubscribersByID = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Subscriber.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
};
