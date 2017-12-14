module.exports = function(app) {
    var models = require('./models/model-server')();
    require('./services/campus-service')(app, models);
    require('./services/user-service')(app, models);
    require('./services/permit-service')(app, models);
    require('./services/vehicle-service')(app, models);
    require('./services/parking-spot-service')(app, models);
    require('./services/user-parking-type-service')(app, models);
    require('./services/parking-lot-service')(app, models);

    /* Create sport */
    //models.parkingSpotModel.createSpots()
    /* Remove sport */
    //models.parkingSpotModel.removeSpots()
};
