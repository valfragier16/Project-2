var orm = require("../config/orm.js");

var activity = {
    all: function(cb) {
      orm.all("activities", function(res) {
        cb(res);
      });
    },
    update: function(id,cb){
      orm.update('activities', id, cb);
    },
    create: function(name,cb){
      orm.create('activities', name, duration, cb);
    },
    
    
};


module.exports = activity;