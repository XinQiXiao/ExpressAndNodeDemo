
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

// 给首页和关于页面加路由
app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});

// 定制 404页面
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// 定制 500页面
app.use(function(err, req, res, next){
	console.error(err.stack)
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});