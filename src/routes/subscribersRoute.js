const express = require('express');
const router = express.Router();
const customMiddleware = require('../middleware/customMiddleware');

const {
  getSubscribers,
  getSubscribersNames,
  getSubscribersByID,
  postSubscribers,
  patchSubscribers,
  deleteSubscribers,
} = require('../controllers/subscribersController');

// here are routes with get method and controllers (request-respnse)
//* get routes
router.route('/subscribers').get(getSubscribers);
router.route('/subscribers/names').get(getSubscribersNames);
router.route('/subscribers/:id').get(getSubscribersByID);
//* post routes
router.route('/subscribers').post(postSubscribers);
//* patch route with custom middleware
router.route('/subscribers/:id').patch(customMiddleware, patchSubscribers);
//* delete route with custom middleware
router.route('/subscribers/:id').delete(customMiddleware, deleteSubscribers);

module.exports = router;
