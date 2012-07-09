var app = require('express').createServer();

app.get('/', function(req, res){
	res.send('testing 1 2 3');
});

app.listen(8080);