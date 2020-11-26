const axios = require('axios');
const cheerio = require('cheerio');

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
