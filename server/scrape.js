const request = require('request-promise');
const cheerio = require('cheerio');

// const URL = 'https://www.oldhousedreams.com/2020/02/29/1910-craftsman-in-bisbee-az/';
let itemsArray = [];
var scrapeResult = {img:'',location:'',bed:'',bath:'',area:'',acreage:'',price:''};
async function scrapeItems(URL){
	const mainHTML = await request(URL);
	try {
		const $ = cheerio.load(mainHTML);

		var imgURL;
		$('img.attachment-full').each((i,elem) => {
			if(i==0){imgURL = elem.attribs.src;}
		})

		const boxBorderUp = $('.box-border-up');
		const location = boxBorderUp
			.children('.prop-address')
			.children('h1')
			.text();
		var locationMod = location.replace('\n\t','');
		locationMod = locationMod.replace('\t','');
		const houseDataList = boxBorderUp
			.children('.clearfix')
			.children('.detail-box')
			.children('ul');
		const listItems = houseDataList.find('li').map((i,el) => {
			const $item = $(el).text();
			return $item;
		}).get();
		listItems.push(imgURL);
		listItems.push(locationMod);
		return listItems;
	} catch (e) {
		console.log('Caught error',e);
	}
}
// scrapeItems(URL).then((data) => {
// 	data.forEach((elem) => {
// 		if(elem.includes('https')){scrapeResult.img = elem;}
// 		else if(elem.includes('$')){scrapeResult.price = elem;}
// 		else if(elem.includes('Bed')){scrapeResult.bed = elem;}
// 		else if(elem.includes('Bath')){scrapeResult.bath = elem;}
// 		else if(elem.includes('Sq Ft')){scrapeResult.area = elem;}
// 		else if(elem.includes('Ac')){scrapeResult.acreage = elem;}
// 		else{scrapeResult.location = elem;}
// 	});
// 	console.log(scrapeResult);
// 	console.log(data);
// });

module.exports = {
	scrapeItems
}