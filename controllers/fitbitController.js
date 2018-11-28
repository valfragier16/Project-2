var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var activity = require("../models/activity");
//WILL BE FOR GETTING COMPLETED ACTIVITIES FROM THE DATABASE
router.get("/", function(req, res) {
    activity.all(function(data) {
      console.log(data);
      res.render('index', {data});//will be res.render('dashboard', {data}); in final
      //res.render('activity_modal');
      

    });
  });

  //   // Create a new example
  // router.post("/api/activities", function(req, res) {
  //   activity.create(["name", "duration"], [req.body.name, req.body.duration], function(result) {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   });
  
  // });


  

  module.exports = router;