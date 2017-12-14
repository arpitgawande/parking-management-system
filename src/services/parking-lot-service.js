module.exports = function(app, models) {
    app.get('/parkingLots', getParkingLots);

    function getParkingLots(req, res) {
        models.parkingLotModel.findParkingLots(req.query.id)
        .then(parkingLots => res.json(parkingLots), err => res.send(err));
    }

}
