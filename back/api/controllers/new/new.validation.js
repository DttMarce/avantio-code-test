const {celebrate, Joi} = require('celebrate');

module.exports = celebrate({
	body: Joi.object().keys({
		title: Joi.string().required(),
		url: Joi.string(),
		author: Joi.string().required()
	})
});
