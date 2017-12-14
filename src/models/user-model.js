const Database = require('../db-connection');
let db = new Database();
module.exports = function(con) {
    return {
        getUserList: function() {
            let sql = 'SELECT * FROM user_with_permit';
            return db.query(sql)
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        },

        findUserById: function(userId) {
            let sql = 'SELECT * FROM user_with_permit WHERE user_id = ?';
            return db.query(sql, [userId])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        },

        addUser: function(user) {
            let sql = 'INSERT INTO user SET user_name = ?, user_address = ?, user_type = ?, campus_id = ?';
            return db.query(sql, [user.name, user.address, user.type, user.campusId])
            .then(function (result) {
                return Promise.resolve(result);
            }, function (err) {
                return Promise.reject(err);
            });
        }
    };
};
