const Joi = require('joi');

const getLongUrl = Joi.object().keys({
    shortId: Joi.string().required()
});

module.exports = {
    getLongUrl
}