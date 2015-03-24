var app = require('./src/app');

var port = 8080;
var host = 'localhost';

var server = app.listen(port, host, function() {

    console.log('Server running at %s:%s', host, port);
});
