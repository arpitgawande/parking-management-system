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

    campusModel.setModels(models);
    parkingLotModel.setModels(models);
    parkingSpotModel.setModels(models);
    permitModel.setModels(models);
    userModel.setModels(models);
    userParkingTypeModel.setModels(models);
    vehicleModel.setModels(models);
    
    return models;
};