const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('Router has been called');

router.get('/', homeController.home);

router.get('/profiles',homeController.profiles);

// For Any further routes , access from here
// router.use('/routerName', require('./routerFile))


router.use('/users',require('./user'));


module.exports = router;