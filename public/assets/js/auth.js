// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  var video = "";
  var randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  var searchedMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  for (var i = 0; i < 5; i++) {
      $.ajax({
          url: randomMealUrl,
          method: "GET"
      }).then(function(result) {



          console.log(result.meals[0].strMealThumb);

          var newImg = $("<img>");
          newImg.addClass("RMPosters");
          newImg.attr("src", result.meals[0].strMealThumb);
          newImg.attr("id", result.meals[0].idMeal);
          newImg.attr("alt", result.meals[0].strYoutube)
          newImg.attr("title", result.meals[0].strMeal)
          newImg.attr("style", "padding: 5px 10px;width:150px;height: 150px");

          $(".randomMeals").append(newImg);

      });
  }

  $("body").on("click", ".RMPosters", function() {

      video = $(this).attr("alt");

      console.log(video);
      callYoutubeModal(video);


  });


  function callYoutubeModal(enteredVideo) {


      enteredVideo = enteredVideo.replace("watch?v=", "embed/");
      console.log("entered video" + enteredVideo);
      $("#ytplayer").empty();

      var ytFrame = $("<iframe>");
      ytFrame.attr("id", "ytplayer");
      ytFrame.attr("type", "text/html");
      ytFrame.attr("width", "100%");
      ytFrame.attr("height", 360);
      ytFrame.attr("allow", "autoplay");
      ytFrame.attr("src", enteredVideo);
      ytFrame.attr("frameborder", 0);
      $("#ytplayer").append(ytFrame);

  }

  //========== Modal to Display Youtube ================================
  var modal = document.getElementById('ytModal');
  var btn = document.getElementById("random");
  var btn2 = document.getElementById("searched");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
      modal.style.display = "block";
  }

  btn2.onclick = function() {
      modal.style.display = "block";
  }


  span.onclick = function() {
      modal.style.display = "none";
      $("#ytplayer").empty();
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  $(".search").on("submit", function(event) {
      event.preventDefault();

      var food = $("#enteredMeal").val();
      console.log(food);
      $("#enteredMeal").empty();
      $(".searchedMeals").val("");

      $.ajax({
          url: searchedMealUrl + food,
          method: "GET"
      }).then(function(result) {



          console.log(result.meals[0].strMealThumb);

          var newImg = $("<img>");
          var newHead = $("<h5>");
          newImg.addClass("RMPosters");
          newImg.attr("src", result.meals[0].strMealThumb);
          newImg.attr("id", result.meals[0].idMeal);
          newImg.attr("alt", result.meals[0].strYoutube)
          newImg.attr("title", result.meals[0].strMeal)
          newImg.attr("style", "padding: 5px 10px;width:150px;height: 150px");
          newHead.append(result.meals[0].strMeal);
          $(".searchedMeals").append(newHead, newImg);

      });


  });
  $(".logoutButton").on("click", function(event) {

      var logoutUser = {
          user: 0
      };

      // Send the PUT request.
      $.ajax("/logout", {
          type: "POST",
          data: logoutUser
      }).then(
          function() {
              console.log("You logged out");
              // Reload the page to get the updated list
              // location.reload();
          }
      );
  });

});