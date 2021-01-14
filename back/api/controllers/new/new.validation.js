const {celebrate, Joi} = require('celebrate');

module.exports = celebrate({
	body: Joi.object().keys({
		body: Joi.string(),
		img: Joi.string(),
		url: Joi.string().required(),
		title: Joi.string().required(),
		updatedAt: Joi.date(),
		date: Joi.date(),
		newspaper: Joi.string(),
		author: Joi.string()
	})
});

