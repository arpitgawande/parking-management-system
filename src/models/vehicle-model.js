const Database = require('../db-connection');
let db = new Database();
module.exports = function(con) {
    return {
        findVehicleListByUserId: function(userId) {
            let sql = 'SELECT * FROM vehicle WHERE user_id = ?';
            return db.query(sql, [userId])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        },

        findVehicleById: function(vehicleId) {
            let sql = 'SELECT * FROM vehicle WHERE vehicle_id = ?';
            return db.query(sql, [vehicleId])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
            
        },

        addVehicle: function(vehicle) {
            let sql = 'INSERT INTO vehicle SET plate_number = ?, plate_state = ?, make = ?, model = ?, color = ?, user_id = ?';
            return db.query(sql, [vehicle.plateNumber, vehicle.plateSlate, vehicle.make, vehicle.model, vehicle.color, vehicle.userId])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        } 
    };
};