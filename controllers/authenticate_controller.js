var express = require("express");

var router = express.Router();


var auth = require("../models/authenticate.js");

   var message = "";
   var sess = ""; 

router.get("/", function(req, res) {

  if(sess){
    var hbsObject = {
      userID: sess
    };
    res.render("dashboard",hbsObject);
  }
  else{
    message = "Please login";
    res.render("index");
  }
  });

  router.get("/login", function(req, res) {

    res.render("index");
  });

  router.get("/signup", function(req, res) {

    res.render("signup");
  });

  router.get("/index", function(req, res) {

    if(sess){
      var hbsObject = {
        activeUserID: sess
      };
      res.render("dashboard",hbsObject);
    }
    else{
      message = "Please login";
      res.render("index");
    }
  });

  router.get("/dashboard", function(req, res) {
    if(sess){
      var hbsObject = {
        userID: sess
      };
      console.log(hbsObject);
      res.render("dashboard",hbsObject);
    }
    else{
      message = "Please login";
      res.redirect("index");
    }

  });

  router.post("/signup", function(req, res) {
    console.log(req.body);
    auth.findEmail([req.body.user_name], function(result){
      console.log(result);
      if(result.length >0){
        message = "Email Already taken";
        res.render("signup",{message:message});

      }
      else{
            auth.create([
                  "username", "password","badges"
                ], [
                  req.body.user_name,req.body.password, 0
                ], function(result2) {
                    if(result2.affectedRows){
                      sess = result2.insertId;
                      console.log(result2.insertId);
                        res.redirect("dashboard");
                    }
                    else{
                        message = "Account not created. Try again";
                        res.redirect("signup");

                    }
                
                  
                });

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
        
        if(result.length > 0){
          sess = result[0].id;
          console.log(result[0].id);
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