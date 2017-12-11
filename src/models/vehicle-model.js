module.exports = function(con) {
    return {
        findVehicleListByUserId: function(userId) {
            let sql = 'SELECT * FROM vehicle WHERE user_id = ?';
            con.query(sql, [userId], function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        },

        findVehicleById: function(vehicleId) {
            let sql = 'SELECT * FROM vehicle WHERE vehicle_id = ?';
            con.query(sql, [vehicleId], function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        },

        addVehicle: function(vehicle) {
            let sql = 'INSERT INTO vehicle (plate_number, plate_state, make, model, color) VALUES ?';
            con.query(sql, [vehicle.plateNumber, vehicle.plateSlate, vehicle.make, vehicle.model, vehicle.color], function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        } 
    };
};