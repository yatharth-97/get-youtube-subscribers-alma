// Controller is request-response handler
// importing the model schema
const Subscriber = require('../models/subscribers');

// gets all the subscribers
const getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find({});
  res.status(200).json(subscribers);
};

// gets the subscriber that has name and subcribedChannel.
const getSubscribersNames = async (req, res) => {
  const subscribers = await Subscriber.find(
    {},
    { _id: 0, name: 1, subscribedChannel: 1 }
  );
  res.status(200).json(subscribers);
};

// gets subscriber by id  and subcribedChannel
// if not found a message will be send
const getSubscribersByID = async (req, res) => {
  const { id: subscriberID } = req.params;
  const subscribers = await Subscriber.findOne({ _id: subscriberID });
  if (!subscribers) {
    return res
      .status(404)
      .json({ msg: `No subscribers with id: ${subscriberID} is found` });
  }
  res.status(200).json({ subscribers });
};

module.exports = { getSubscribers, getSubscribersNames, getSubscribersByID };
