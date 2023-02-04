var express = require('express');

var userController = require('../src/user/userController');
var eventController = require('../src/events/eventController');
var findBuddyController = require('../src/findbuddy/findbuddyController');
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);

//event api
router.route('/user/event').post(eventController.getEvent);
router.route('/user/createEvent').post(eventController.sendEvent);

//find buddy api
router.route('/user/findbuddy').post(findBuddyController.getBuddy);
router.route('/user/createFindbuddy').post(findBuddyController.sendBuddy);
module.exports = router;