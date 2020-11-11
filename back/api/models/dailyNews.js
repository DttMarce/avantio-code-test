const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const dailyNewsSchema = Schema({
	date: {
		type: Date,
		default: Date.now()
	},
	newspaper: String,
  news: [{
		title: String,
		url: String,
		author: String,
		text: String,
		img: String,
		updatedAt: {
			type: Date,
			default: Date.now()
		}
	}]
});

module.exports = mongoose. model('DailyNews', dailyNewsSchema);
