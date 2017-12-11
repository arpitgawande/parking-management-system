const Database = require('../db-connection');
let db = new Database();
module.exports = function(con) {
    return {
        findParkingLotByUserType: function(type) {
            let sql = 'SELECT * FROM parking_lot WHERE user_type = ?';
            return db.query(sql, [type])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        },

        findParkingLotByName: function(lotName) {
            let sql = 'SELECT * FROM parking_lot WHERER lot_name = ?';
            return db.query(sql, [lotName])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });

        }
    };
}