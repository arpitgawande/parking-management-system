const Database = require('../db-connection');
let db = new Database();
module.exports = function () {
    return {
        getUserTypeList: function () {
            let sql = 'SELECT * FROM user_parking_type';
            return db.query(sql)
                .then(function (result) {
                    return Promise.resolve(result);
                }, function (err) {
                    return Promise.reject(err);
                });
        },

        findUserTypeByDescription: function (description) {
            let sql = 'SELECT * FROM user_parking_type WHERE description = ?';
            return db.query(sql)
                .then(function (result) {
                    return Promise.resolve(result);
                }, function (err) {
                    return Promise.reject(err);
                });
        }
    };
}