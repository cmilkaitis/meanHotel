const express = require('express');
let app = express();

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('working on ' + app.get('port'));
});

