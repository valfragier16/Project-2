var orm = require("../config/orm.js");

var auth = {
    all: function(cb) {
        orm.selectAll("users", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("users", cols, vals, function(res) {
            cb(res);
        });
    },
    find: function(condition1, condition2, cb) {
        orm.findOne("users", condition1, condition2, function(res) {
            cb(res);
        });
    },
    findEmail: function(condition1, cb) {
        orm.findEmail("users", condition1, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = auth;