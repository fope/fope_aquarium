var mongoose = require('mongoose');
var config = require('../configs/index');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;