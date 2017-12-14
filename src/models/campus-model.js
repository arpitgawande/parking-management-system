const Database = require('../db-connection');
let db = new Database();
module.exports = function () {
    return {
        getCampusList: function () {
            let sql = 'SELECT * FROM campus';
            return db.query(sql)
                .then(function (result) {
                    return Promise.resolve(result);
                }, function (err) {
                    return Promise.reject(err);
                });
        },

        findCampusIDByName: function (campusName) {
            let sql = 'SELECT * FROM campus WHERE campus_name = ?';
            return db.query(sql, [campusName])
                .then(function (result) {
                    return Promise.resolve(result);
                }, function (err) {
                    return Promise.reject(err);
                });
        }
    };
};
