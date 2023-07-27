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
  const { id: subscriberID } = req.params;
  const subscriber = await Subscriber.findOne({ _id: subscriberID });
  if (!subscriber) {
    return res
      .status(404)
      .json({ msg: `No subscriber with id: ${subscriberID} is found` });
  }
  res.status(200).json({ subscriber });
};

//---------------------------------EXTRA CONTENT-----------------------------------------------
// posts new subscriber's name and the channel to which he is subscribed
// adding new content to the database api
// data is sent to body.create
const postSubscribers = async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// updates name and subscribedChannel info in body
const patchSubscribers = async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedChannel != null) {
    res.subscriber.subscribedChannel = req.body.subscribedChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// deletes the subscriber from the database
const deleteSubscribers = async (req, res) => {
  try {
    await res.subscriber.deleteOne();
    res.json({ message: 'SUBSCRIBER DELETED' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
  postSubscribers,
  patchSubscribers,
  deleteSubscribers,
};
