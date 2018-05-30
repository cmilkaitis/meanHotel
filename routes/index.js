let express = require('express');
let router = express.Router();

router
    .route('/json')
    .get(function(req, res){
        console.log("GET the json");
        res
            .status(200)
            .json({"JSONdata": true});
    })
    .post(function(req, res){
        console.log("POST the json route");
        res
            .status(200)
            .json({"JSONdata": "POST recieved"});
    });

module.exports = router;