let hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    console.log("GET the hotels");
    res
        .status(200)
        .json( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
    let hotelId = req.params.hotelID;
    var thisHotel = hotelData[hotelId];
    console.log("GET the hotel ID: ", hotelId);
    res
        .status(200)
        .json( thisHotel );
};