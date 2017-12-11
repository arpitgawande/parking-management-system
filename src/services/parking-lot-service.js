module.exports = function(app, models) {
    app.get('/parkinglots', getParkingLots);

    function getParkingLots(req, res) {
        models.userModel.findUserById(req.query.id)
        .then(user => {
            models.parkingLotModel.findParkingLotByUserType(user[0].user_type)
            .then(parkingLots => res.json(parkingLots), err => res.send(err));
        });
    }
}