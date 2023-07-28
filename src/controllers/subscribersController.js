// Controller is request-response handler
// importing the model schema
const Subscriber = require('../models/subscribers');

// gets all the subscribers
// it requests a data from resource
const getSubscribers = async (req, res) => {
  const subscriber = await Subscriber.find({});
  res.status(200).json(subscriber);
};

// gets the subscriber that has name and subcribedChannel.
const getSubscribersNames = async (req, res) => {
  const subscriber = await Subscriber.find(
    {},
    { _id: 0, name: 1, subscribedChannel: 1 }
  );
  res.status(200).json(subscriber);
};

// gets subscriber by id  and subcribedChannel
// if not found a message will be send
const getSubscribersByID = async (req, res) => {
  //
};

module.exports = {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
};
