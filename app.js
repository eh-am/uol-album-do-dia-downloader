var uolPhotoScraper = require("./uolPhotoScraper"),
    argv            = require('yargs').argv;


if (argv.url && argv.photo){
	uolPhotoScraper.scrap(argv.url, argv.photo, function(err, data){
		if (err) return console.error(err);

		console.log(data);
	});
}else{
	console.log("Usage example: --url www.uol.com.br/example --photo 3");
}

