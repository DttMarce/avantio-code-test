const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const newSchema = Schema({
  title: String,
  url: String,
	author: String,
	img: String
});

module.exports = mongoose. model('New', newSchema);
