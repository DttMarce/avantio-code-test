const axios = require('axios');
const cheerio = require('cheerio');
var ObjectId = require('mongoose').Types.ObjectId;

const News = require('../models/news');

exports.getNewsElPais = async function (idNewspaper) {
	const dateTime = new Date();
	const currentDay = dateTime.getDate();
	const currentMonth = dateTime.getMonth() + 1;
	const currentYear = dateTime.getFullYear();
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	return await News.find({
		date: {$gte: currentDate},
		newspaper:{$eq: new ObjectId(`${idNewspaper}`)}
	}, async (err, newsFinded) => {
		if (err) {
			return res.status(500).send({error: `Internal Server Error: ${err}`});
		}

		return newsFinded;
	});
}

exports.saveNewsElPais = async function (idNewspaper, newsScrapped) {
	let newsToResponse = [];

	await Promise.all(newsScrapped.map( async newScrapped => {
		const newToSave = new News();

		newToSave.author = newScrapped.author;
		newToSave.img = newScrapped.img;
		newToSave.title = newScrapped.title;
		newToSave.url = newScrapped.url;
		newToSave.newspaper = idNewspaper;

		newsToResponse.push(newToSave);

		await newToSave.save((err, newSaved) => {
			if (err) {
				return res.status(500).send({response: `Error al guardar en la bbdd: ${err}`});
			}
		});
	}));

	return newsToResponse;
}

exports.getSelectedNewElPais = async function(id) {
	const findNew = await News.findById(id, async (err, selectedNew) => {
		if (err || !selectedNew) {
			return false;
		}

		return selectedNew;
	});

	return findNew;
}

exports.updateNewElPais = async function(id, title, body) {
	News.update({
		_id: {$eq: new ObjectId(`${id}`)}
	},{
		$set: {
			'title': title,
			'body': body
		}
	}, (err, count) => {
		if(err) {
			console.error(error);
		}
		console.log(count);
	});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////WEB SCRAPPING////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getWebScrappingElPais = async function (req, res) {
	try {
		const response = await axios.get("https://elpais.com/");

		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);
			let elPaisNewsList = [];

			$('.story_card').each(function(i, elem) {
				elPaisNewsList[i] = {
					title: $(this).find('h2').text().trim(),
					url: `https://elpais.com${$(this).find('h2 a').attr('href')}`,
					author: $(this).find('.author').text().trim(),
					img: $(this).find('img').attr('src')
				};
			});

			const elPaisNewsListTrimmed = elPaisNewsList.filter(n => n != undefined );

			return elPaisNewsListTrimmed;
		}
  } catch (error) {
    console.error(error);
	}
};

exports.getWebScrappingSelectedNewElPais = async function (urlNewToScrap) {
	try {
		const response = await axios.get(urlNewToScrap);

		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);

			const title = $('h1').text().trim();
			const body = $('.article_body p').text().trim();

			return {
				title: title,
				body: body
			}
		}

		return;
  } catch (error) {
    console.error(error);
  }
};
