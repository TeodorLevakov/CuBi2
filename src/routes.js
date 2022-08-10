const express = require('express');

const router = express.Router();

const homeController = require('./controllers/homecontroller.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');

router.use('/', homeController);
//router.get('/', homeController.index);
//router.get('/about', homeController.about);

router.use('/cube', cubeController);
router.use('/accessory', accessoryController);

module.exports = router;

