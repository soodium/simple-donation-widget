var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080, function() {
    console.log('Server running on 8080');
    console.log('See the widget in action on http://localhost:8080/app/')
});
