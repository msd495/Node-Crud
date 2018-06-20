var express = require('express');
var app = express();
var fs = require("fs");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:true});
router.use(urlencodedParser);

router.get('/readBook',function(req,res){
	
	fs.readFile('./book.json',function(err,data){
			if(err){
				return console.error(err);
			}
			
			var jsonObj = JSON.parse(data);
			res.json(jsonObj);
	});
	
});

module.exports = router;

/* var server = app.listen(8082,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); */