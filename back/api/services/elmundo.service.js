const axios = require('axios');
const cheerio = require('cheerio');

exports.getWebScrappingElMundo = async function (req, res) {
	try {
		const response = await axios.get("https://elmundo.es/");

		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);
			let elMundoNewsList = [];

			$('.ue-c-cover-content').each(function(i, elem) {
				elMundoNewsList[i] = {
					title: $(this).find('h2').text().trim(),
					url: $(this).find('a').attr('href'),
					author: $(this).find('.ue-c-cover-content__byline-name').text().trim(),
					img: $(this).find('img').attr('src')
				};
			});

			const elMundoNewsListTrimmed = elMundoNewsList.filter(n => n != undefined );

			return elMundoNewsListTrimmed;
		}
  } catch (error) {
    console.error(error);
	}
};

exports.getWebScrappingSelectedNewElMundo = async function (urlNewToScrap) {
	try {
		const response = await axios.get(urlNewToScrap);

		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);

			const title = $('h1').text().trim();
			const body = $('.ue-c-article__body').text().trim();

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
