module.exports = function() {
    var campusModel = require('./campus-model')();
    var parkingLotModel = require('./parking-lot-model')();
    var parkingSpotModel = require('./parking-spot-model')();
    var permitModel = require('./permit-model')();
    var userModel = require('./user-model')();
    var userParkingTypeModel = require('./user-parking-type-model')();
    var vehicleModel = require('./vehicle-model')();

    var models = {
        campusModel: campusModel,
        parkingLotModel: parkingLotModel,
        parkingSpotModel: parkingSpotModel,
        permitModel: permitModel,
        userModel: userModel,
        userParkingTypeModel: userParkingTypeModel,
        vehicleModel: vehicleModel
    };
    
    return models;
};