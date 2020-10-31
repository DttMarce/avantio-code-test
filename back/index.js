const http = require('http');
const mongoose = require('mongoose');

const config = require('./config/environment');
const logger = require('./utils/logger');
const app = require('./config/express');

const initialize = async () => {
	try {
		mongoose.connect(config.db, config.mongoConnection, (error, res) => {
			if (error) {
				return logger.error(`Error al conectar a la bbdd: ${error}`);
			}

			logger.info(`BBDD listening on ${config.db}, in ${config.env} mode`);
			const server = http.createServer(app);
			server.listen(config.port, () => {
				logger.info(`Server listening on ${config.port}, in ${config.env} mode`);
				logger.info('Alright partner... Keep on rollin\' baby... You know what time it is!!');
			});
		});
	} catch (error) {
		logger.error('Something went wrong!');
		logger.error(error.message);
		await initialize();
	}
};

initialize();
