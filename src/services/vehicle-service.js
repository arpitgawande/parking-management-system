module.exports = function(app, models) {
    app.get('/vehicleList', findVehicleListByUserId);
    app.post('/addVehicle', addVehicle);

    function findVehicleListByUserId(req, res) {
        models.vehicleModel.findVehicleListByUserId(req.query.id)
        .then(vehicleList => res.json(vehicleList), err => res.send(err));
    }

    function addVehicle(req, res) {
        let vehicle = req.body;
        models.vehicleModel.addVehicle(vehicle)
        .then(response => res.json(response), err => res.send(err));
    }
};