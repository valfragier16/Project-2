var orm = require("../config/orm.js");

var activity = {
    all: function(val, cb) {
      orm.all("activities",val, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition,cb){
      orm.update('activities', objColVals, condition, cb);
    },
    create: function(cols, vals,cb){
      orm.create("activities", cols, vals, cb);
    },
    delete: function(condition, cb) {
      orm.delete("activities", condition, function(res) {
        cb(res);
      });
    }
    
    
};


module.exports = activity;