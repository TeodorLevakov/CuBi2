const Accessory = require('../models/Accessory.js');

exports.getAll = () => Accessory.find();

exports.create = (data) =>  Accessory.create(data);

