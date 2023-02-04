var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var findbuddySchema = new Schema({
//change the schema
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('findbuddies', findbuddySchema);