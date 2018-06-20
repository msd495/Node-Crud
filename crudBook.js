var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var delBook = require('C:\\Users\\ShrutiCP12728\\Desktop\\node\\bookApp\\deleteBook');
var instBook = require('C:\\Users\\ShrutiCP12728\\Desktop\\node\\bookApp\\insertBook');
var updBook = require('C:\\Users\\ShrutiCP12728\\Desktop\\node\\bookApp\\updateBook');
var redBook = require('C:\\Users\\ShrutiCP12728\\Desktop\\node\\bookApp\\readBook');

var urlencodedParser = bodyParser.urlencoded({extended:true});

app.use('/deleteBook',delBook);
app.use('/insertBook',instBook);
app.use('/updateBook',updBook);
app.use('/readBook',redBook);

var server = app.listen(8082,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
});