var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/node_modules'));

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/views'));

//rotas
app.get('/', function (req, res) {
  res.render('index.ejs')
});
app.get('/olar', function (req, res) {
  res.render('olar.html')
});
app.get('*', function(req, res){
  res.render('cade.html')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
