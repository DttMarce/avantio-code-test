const winston = require('winston');
const config = require('../../config/environment');

class Logger {
	constructor(logLevel) {
		this.level = logLevel;
		this.logger = winston.createLogger({
      levels: winston.config.npm.levels,
			transports: this.transports
		});
	}

	get transports() {
		const transports = [];
		if (config.env !== 'test') {
			transports.push(this.console);
		}

		return transports;
	}

	get console() {
		const {format: {colorize, timestamp, align, printf, combine}} = winston;

		return new winston.transports.Console({
			level: this.level,
			format: combine(
				colorize(),
				timestamp(),
				align(),
				printf((info) => `${info.timestamp} ${info.level}: ${info.message.trim()}`)
			)
		});
	}

	get stream() {
		return {
			write: (message, encoding) => {
				this.logger.info(message);
			}
		};
	}
}

module.exports = new Logger(config.logger.level);
