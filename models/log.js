var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: Object},
    regexCheck: {type: String}

});

module.exports = mongoose.model('LogIp', schema);