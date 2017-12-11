module.exports = function(con) {
    return {
        getUserList: function() {
            let sql = 'SELECT * FROM user';
            con.query(sql, function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        },

        findUserById: function(userId) {
            let sql = 'SELECT * FROM user WHERE user_id = ?';
            con.query(sql, [userId], function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        },

        addUser: function(user) {
            let sql = 'INSERT INTO user (user_name, user_ address, user_type, campus_id) VALUES ?';
            con.query(sql, [user.name, user.address, user.type, user.campusId], function(err, result, fields) {
                if (err) return Promise.reject(err);
                return Promise.resolve(result);
            });
        }
    };
};