let express = require('express');
let router = express.Router();
let ctrlHotels =require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);
   
module.exports = router;