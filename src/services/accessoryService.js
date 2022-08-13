const Accessory = require('../models/Accessory.js');

exports.getAll = () => Accessory.find();

exports.getAllWithout = (ids) => Accessory.find({ _id: {$nin: ids}});

exports.create = (data) =>  Accessory.create(data);

