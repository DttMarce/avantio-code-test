let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

exports.getWebScrapping = async function (req, res) {

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
					author: $(this).find('.author').text().trim()
				};
			});

			console.log(elPaisNewsList);

			const elPaisNewsListTrimmed = elPaisNewsList.filter(n => n != undefined );
			fs.writeFile(
				'elPaisNews.json', JSON.stringify(elPaisNewsListTrimmed, null, 4),
				(err)=> console.log('File successfully written!'));


			return elPaisNewsList;
		}
  } catch (error) {
    console.error(error);
	}
};
