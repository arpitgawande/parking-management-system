const Database = require('../db-connection');
let db = new Database();
module.exports = function(con) {
    return {
      buyPermit: function(userID) {
          let now = new Date()
          let sqlDate = now.toMysqlFormat();
          let permit = {
            status: 1,
            issue_date: sqlDate,
            effective_date: sqlDate,
            expiration_date: sqlDate,
            amount: 150,
            user_id: userID
          }
          console.log('insert:', permit)
          let sql = 'INSERT INTO permit SET status = ?, issue_date = ?, effective_date = ?, expiration_date = ?, amount = ?, user_id = ?';
          return db.query(sql, [permit.status, permit.issue_date, permit.effective_date, permit.expiration_date, permit.amount,
            permit.user_id], function(err, result){
              if(err){
                return Promise.reject(err);
              }
                console.log('result', result)
                return Promise.resolve(result);
            });
      }
    };
}

/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
