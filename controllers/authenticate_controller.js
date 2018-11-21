var express = require("express");

var router = express.Router();


var auth = require("../models/authenticate.js");

   var message = "";
   //var sess = req.session; 

router.get("/", function(req, res) {
    auth.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.get("/login", function(req, res) {
    auth.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.get("/signup", function(req, res) {
    auth.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("signup", hbsObject);
    });
  });

  router.get("/index", function(req, res) {
    auth.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.get("/dashboard", function(req, res) {
    auth.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("dashboard", hbsObject);
    });
  });

  router.post("/signup", function(req, res) {
    console.log(req.body);
    auth.create([
      "username", "password","badges"
    ], [
      req.body.user_name,req.body.password, 0
    ], function(result) {
        if(result.affectedRows){
            res.redirect("dashboard");
        }
        else{
            res.redirect("signup");

        }
     
      
    });
  });

  router.post("/login", function(req, res) {
    console.log(req.body);
    auth.find([
        req.body.user_name
    ], [
      req.body.password
    ], function(result) {
        //console.log(res.json(result));
        if(result){
            res.redirect("dashboard");
        }
        else{
            message = "Wrong Credentials";
            res.render("index",{message:message});

        }
     
      
    });
  });



//   router.put("/api/burgers/:id", function(req, res) {
//     // console.log(req);
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
  
//     burger.update({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//  });


module.exports = router;