var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (vals, cb) {
        orm.insertOne("burgers", vals, function (res) {
            cb(res);
        });
    },
    update: function (condition, cb) {
        orm.updateOne("burgers", condition, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;