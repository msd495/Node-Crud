var express = require('express');
var app = express();
var fs = require("fs");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
router.use(urlencodedParser);

router.post('/insertBook',function(req,res){
	
	let bookname = req.body;
	res.json(bookname);
	var jsonObj = [];
	var data = fs.readFileSync('./book.json');
	jsonObj = JSON.parse(data);
	//console.log("length--"+jsonObj.length);
	
	var index = jsonObj.length;
	//console.log("index--"+index);
	
	jsonObj[index] = bookname;
	
	var finalData = JSON.stringify(jsonObj);
	fs.writeFile('./book.json',finalData, function(err){
		if(err){
			return console.error(err);
		}	
	}); 
	
});

module.exports = router;

/* var server = app.listen(8082,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); */