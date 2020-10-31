 
module.exports = {
	db: process.env.MONGODB || 'mongodb://localhost:27017/avantio-code-test',
	mongoConnection: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	}
};