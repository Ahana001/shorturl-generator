const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;
const ShortUrlSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        default: shortid.generate()
    },
})

const ShortUrl = mongoose.model('shortUrl', ShortUrlSchema)

module.exports = ShortUrl;