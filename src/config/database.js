const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/cubi2';

exports.startDB = () => mongoose.connect(url); 



