// import mysql connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, vals, cb) {
        var queryString = "INSERT INTO ?? SET ?";

        var newBurger = {burger_name: vals};
        connection.query(queryString, [table, newBurger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE ?? SET devoured=true WHERE id=" + condition;

        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

// Export the orm object for the model 
module.exports = orm;










