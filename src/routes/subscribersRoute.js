const express = require('express');
const router = express.Router();

const {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
} = require('../controllers/subscribersController');

// here are routes with get method and controllers (request-respnse)
router.route('/subscribers').get(getSubscribers);
router.route('/subscribers/names').get(getSubscribersNames);
router.route('/subscribers/:id').get(getSubscribersByID);

module.exports = router;
