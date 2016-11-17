var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));



app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(morgan('dev'));



app.get('*', function(req, res, next) {
  res.sendfile("./dist/index.html");
});


app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});
