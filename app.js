var express = require('express'),
    bodyParser = require('body-parser'),
    //pgp = require('pg-promise'),
    //pg = require('pg'),
    port = process.env.PORT || 5000,
    ip = process.env.IP,
    app = express();
    
//var connection = {
//    host: '',
//    port: 5432,
//    database: '',
//    user: '',
//    password: '',
//};

//var db = pgp(connection);
//var db = new pg.Client(connection);
//db.connect();

var indexRouter = require('./src/routes/indexRoutes')();
var apiRouter = require('./src/routes/apiRoutes')();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/Api', apiRouter);

app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('Gulp is running server on port ' + port);
    console.log('IP: ' + ip);
    
});