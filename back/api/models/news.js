const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongoose').Types.ObjectId;

const newSchema = Schema({
	author: String,
	body: String,
	img: String,
  url: String,
	title: String,
	customNew: {
		type: Boolean,
		default: false
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	},
	date: {
		type: Date,
		default: Date.now()
	},
	newspaper: ObjectId
});

module.exports = mongoose.model('News', newSchema);
