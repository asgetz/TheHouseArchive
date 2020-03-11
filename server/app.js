const express = require('express');
const app = express();
const port = 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*"); // disabled for security on local
	res.header("Access-Control-Allow-Headers","Content-Type");
	next();
});

const scrape = require('./scrape.js');

var scrapeResult = {img:'',location:'',bed:'',bath:'',area:'',acreage:'',price:''};
var savedHomes = [];

app.get('/homes', async (req,res) => {
	console.log('get:',savedHomes);
	res.send(savedHomes);
});

app.post('/homes', async (req,res) => {
	console.log(req.body);
	const homeData = await scrape.scrapeItems(req.body.houseURL)
		.then((data) => {
			data.forEach((elem) => {
				if(elem.includes('https')){scrapeResult.img = elem;}
				else if(elem.includes('$')){scrapeResult.price = elem;}
				else if(elem.includes('Bed')){scrapeResult.bed = elem;}
				else if(elem.includes('Bath')){scrapeResult.bath = elem;}
				else if(elem.includes('Sq Ft')){scrapeResult.area = elem;}
				else if(elem.includes('Ac')){scrapeResult.acreage = elem;}
				else{scrapeResult.location = elem;}
			});
			// console.log(scrapeResult);
			// console.log(data);
			savedHomes.push(scrapeResult);
			
			console.log('post:',savedHomes);
			res.send(savedHomes);
		});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// savedHomes = [
// 	{
// 		img: 'https://www.oldhousedreams.com/wp-content/uploads/2018/11/1-2727ENewberry.jpg',
// 		location: '2727 E Newberry Blvd, Milwaukee, WI 53211',
// 		bed: '7 Bed',
// 		bath: '3 full, 2 half Bath',
// 		area: '9607 Sq Ft',
// 		acreage: '',
// 		price: '$1,199,900'
// 	},
// 	{
// 		img: 'https://www.oldhousedreams.com/wp-content/uploads/2018/12/1-550MainSt.jpg',
// 		location: '550 Main St, Union, WV 24983',
// 		bed: '4 Bed',
// 		bath: '2 Baths',
// 		area: '2877 Sq Ft',
// 		acreage: '0.48 Ac.',
// 		price: '$175,000'
// 	},
// 	{
// 		img: 'https://www.oldhousedreams.com/wp-content/uploads/2020/02/1-635tombstone0227.jpg',
// 		location: '635 Tombstone Canyon Rd, Bisbee, AZ 85603',
// 		bed: '2 Bed',
// 		bath: '2 Baths',
// 		area: '1206 Sq Ft',
// 		acreage: '0.25 Ac.',
// 		price: '$189,000'
// 	},
// ];