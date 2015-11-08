var express = require('express');
var app = express();
var handleRoutes=require('./routes/handleRoutes');
var port = 3000;

app.set('view engine', 'jade');
app.use('/assets/js', express.static('./public/javascripts'));

handleRoutes(app);

app.listen(port);
//
//app.use('/', function (req, res, next) {
//	console.log('Request Url:' + req.url);
//	next();
//});
//
//app.get('/', function(req, res) {
//	res.render('index');
//});
//
//app.get('/person/:id', function(req, res) {
//	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
//});

//app.post('/person', urlencodedParser, function(req, res) {
//	res.send('Thank you!');
//	console.log(req.body.firstname);
//	console.log(req.body.lastname);
//});


//app.get('/api', function(req, res) {
//	res.json({ firstname: 'John', lastname: 'Doe' });
//});
