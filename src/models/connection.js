var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "rutgers",
    password: "rutgers",
    database: "rutgers_parking_system"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    module.exports = {con};
  });
