const Database = require('../db-connection');
let db = new Database();
module.exports = function(con) {
    return {
      createSpots: () => {
          let sql1 = 'SELECT * FROM parking_lot';
          return db.query(sql1, function(err, rows, fields){
            if (err) throw err
            rows.forEach(function(lot){
                for (var i = 1; i <= lot.total_spot; i++) {
                  sql2 = 'INSERT INTO parking_spot (spot_id, lot_id) VALUES (?,?)';
                  spot = [i, lot.lot_id];
                  db.query(sql2, spot);
                }
            })
          });
      },

      removeSpots: () => {
          let sql = 'DELETE FROM parking_spot';
          return db.query(sql, function(err, rows, fields){
            if (err) throw err
            return 0;
            });
      },

      findParkingSpotsByLot: function(lotId) {
          let sql = 'SELECT * FROM parking_spot WHERE lot_id = ?';
          return db.query(sql, [lotId])
          .then(function (result) {
              return Promise.resolve(result);
          }, function (err) {
              return Promise.reject(err);
          });
      },

      bookSpot: function(userId, lotId, spotId) {
          let selectPermitSql = 'SELECT * FROM permit WHERE user_id = ?';
          return db.query(selectPermitSql, [userId])
          .then(function (user) {
              console.log('user', user);
              let selectSpotSql = 'SELECT * FROM parking_spot WHERE permit_number = ?';
              return db.query(selectSpotSql, [user.permit_number])
                .then(function (parking_spot) {
                  console.log('parking_spot', parking_spot);
                  if(parking_spot){
                    return Promise.resolve(1)
                  }else{
                    let insertSql = 'INSERT INTO permit SET permit_number =? WHERE lot_id = ? AND spot_id = ?';
                    return db.query(sql, [user.permit_number, lotId, spotId])
                    .then(function (result) {
                        return Promise.resolve(result);
                    }, function (err) {
                        return Promise.reject(err);
                    });
                  }
                }, function (err) {
                    return Promise.reject(err);
                });
          }, function (err) {
              return Promise.reject(err);
          });
      },

    };
}
