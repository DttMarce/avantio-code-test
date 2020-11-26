const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const newspaperSchema = Schema({
	name: String,
	img: String,
	updatedAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Newspaper', newspaperSchema);
