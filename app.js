let express = require('express');
let app = express();
let path = require('path');
let routes = require('./routes');

app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.get('/json', function(req, res){
    console.log("GET the json");
    res
        .status(200)
        .json({"JSONdata": true});
});

app.get('/file', function(req, res){
    console.log("GET the file");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('working on ' + port);
});

