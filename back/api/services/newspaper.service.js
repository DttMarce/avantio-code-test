const Newspaper = require('../models/newspaper');

exports.getNewspaper = async function(name) {
	try {
		const newspaper = await Newspaper.findOne({
			name: {$eq: `${name}`}
		}, async (err, newspaperFinded) => {
			if (err) {
				return res.status(500).send({error: `Internal Server Error: ${err}`});
			}

			return newspaperFinded;
		});

		if (!newspaper) {
			savedNewspaper = await this.saveNewspaper(name);
			return savedNewspaper;
		}

		return newspaper;
	} catch	(error) {
		logger.error(error)
	}
}

saveNewspaper = async function(name) {
	const newspaper = new Newspaper();

	newspaper.name = 'el-pais';
	newspaper.img = `/assets/img/${name}.png`;

	try {
		return await newspaper.save();
	} catch	(error) {
		logger.error(error);
	}
}
