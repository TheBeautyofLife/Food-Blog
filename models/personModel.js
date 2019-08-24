const mongoose = require('mongoose')

const formUpload = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    cloudImage: {
        type: String,
        required: true
    },
    cloudFile: {
        type: String,
        required: true
    },
    personId: {
        type: String
    },

    post_date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('formUpload', formUpload)