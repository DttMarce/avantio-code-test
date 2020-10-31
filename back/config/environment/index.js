require('dotenv').config();
const path = require('path');
const {merge} = require('lodash');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'utc';

const env = process.env.NODE_ENV;
const tz = process.env.TZ;
const envConfig = require(`./${env}.js`);

const rootPath = path.normalize(`${__dirname}/../..`);

const all = {
	env,
	tz,
	root: rootPath,
	port: 9000,
	logger: {
		level: 'debug'
	}
};

const config = merge(all, envConfig);

module.exports = config;
