var request = require('request'),
    cheerio = require('cheerio');


module.exports = {
	scrap: function(url, photo_id, callback){
		request(url, function (err, response, body){
			if (err) callback(Error("Couldn't complete the request"), null);

			if (response.statusCode == 200){
				var $ = cheerio.load(body);
				var noscript = $("#conteudo-principal #albumData dd:nth-of-type(2) dl dd:nth-of-type(" + photo_id + ") noscript").html();

				if (noscript == null) return callback(Error("There's no such photo (" +photo_id + ")"), null);	

				$ = cheerio.load(noscript);

				callback(null, $('a').attr('href'));
				
			}else{
				callback(Error("Request returned status code " + reponse.statusCode), null);
			}
		});
	}
}
