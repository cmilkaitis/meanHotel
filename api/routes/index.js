let express = require('express');
let router = express.Router();
let ctrlHotels =require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelID')
    .get(ctrlHotels.hotelsGetOne);
   
module.exports = router;