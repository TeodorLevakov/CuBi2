const express = require('express');

const router = express.Router();

const homeController = require('./controllers/homecontroller.js');
const cubeController = require('./controllers/cubeController.js');

router.use('/', homeController);
//router.get('/', homeController.index);
//router.get('/about', homeController.about);

router.use('/cube', cubeController);


module.exports = router;

