//var db = require("../models");
module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
      db.User.findAll({}).then(function(dbExamples) {
          res.json(dbExamples);
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
      db.User.create(req.body).then(function(dbExample) {
          res.json(dbExample);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
      db.User.destroy({
          where: {
              id: req.params.id
          }
      }).then(function(dbExample) {
          res.json(dbExample);
      });
  });

  app.get("/login", function(req, res) {
      res.render("login");
  });

  app.post("/login", function(req, res) {
      // console.log(req);
      db.User.findOne({
          where: {
              username: req.body.username,
              password: req.body.password
          }
      }).then(function(results) {
          if (results.length > 0) {
              // req.session.userId = results[0].id;
              // req.session.user = results[0];
              console.log(results[0].id);
              res.render("index");
          } else {
              res.render("index");
          }
      });
  });
};