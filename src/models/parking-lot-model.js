module.exports = function(con) {
    return {
        getParkingLotList: function() {
            let sql = 'SELECT * FROM parking_lot';
            con.query(sql, function(err, result, fields) {
                if (err) Promise.reject(err);
                Promise.resolve(result);
            });
        },

        findParkingLotByName: function(lotName) {
            let sql = 'SELECT * FROM parking_lot WHERER lot_name = ?';
            con.query(sql, [lotName], function(err, result, fields) {
                if (err) Promise.reject(err);
                Promise.resolve(result);
            });
        }
    };
}