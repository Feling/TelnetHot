var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: Object},

});

module.exports = mongoose.model('LogIp', schema);