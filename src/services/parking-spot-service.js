module.exports = function(app, models) {
    app.get('/parkingLotSpots', getParkingLotSpots);
    app.get('/getSpot', getSpot);

    function getParkingLotSpots(req, res) {
        models.parkingSpotModel.findParkingSpotsByLot(req.query.lotId)
        .then(parkingSpots => res.json(parkingSpots), err => res.send(err));
    }

    function getSpot(req, res) {
        models.parkingSpotModel.bookSpot(req.query.userId, req.query.lotId, req.query.spotId)
        .then(response => res.json(response), err => res.send(err));
    }
}
