var orm = require("../config/orm.js");

var activity = {
    all: function(val, cb) {
      orm.all("activities",val, function(res) {
        cb(res);
      });
    },
    update: function(id,cb){
      orm.update('activities', id, cb);
    },
    create: function(cols, vals,cb){
      orm.create("activities", cols, vals, cb);
    },
    
    
};


module.exports = activity;