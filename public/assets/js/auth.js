// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  var video = "";
  var randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  var searchedMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  updateProgressBar();
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

  $("body").on("click","#share", function() {
  
    //video = $(this).attr("alt");

   
    callFitbitModal();


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

  function callFitbitModal() {
  
  
        
    $("#fitbit").empty();

    var ztFrame = $("<iframe>");
    ztFrame.attr("id", "ytplayer");
    ztFrame.attr("type", "text/html");
    ztFrame.attr("width", "100%");
    ztFrame.attr("height", 360);
    ztFrame.attr("allow", "autoplay");
    //ztFrame.attr("src", enteredVideo);
    ztFrame.attr("frameborder", 0);
    $("#fitbit").append(ztFrame);

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

  $("#confirm").on("click", function(e) {
               
    e.preventDefault();
    var selectedCategories = $("#categories-drop").val();
    var selectedDuration = $("#actDuration").val();
    var radioValue = $("input[name='heard']:checked").val();
    var boolVal = 0;
    console.log(selectedCategories,selectedDuration,radioValue);

    if (radioValue === "completed"){
        boolVal = 1;
    }
    else{
        //do nothing
    }
    var createActivity = {
        activity : selectedCategories,
        duration : selectedDuration,
        completed : boolVal

    }

    $.ajax("/api/activities", {
        type: "POST",
        data: createActivity
    }).then(
        function() {
            console.log("Activity Added");
            // Reload the page to get the updated list
            location.reload();
        }
    );
 
    })

    function updateProgressBar(){
        var activeProgress = parseInt($(".completedAct").length + '0');
        console.log("Completed Activities: " + activeProgress);

        var elem = document.getElementsByClassName("progress-bar")[0];   
        var width = 0;
        
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= activeProgress) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
          }
        }

    }

    $(".update-activity").on("click", function(event) {
        var id = $(this).data("id");

    
        var completeActivity = {
          completed: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/activities/" + id, {
          type: "PUT",
          data: completeActivity
        }).then(
          function() {
            console.log("Completed task");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".delete-activity").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/activities/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Deleted task");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });



});


// spotify playback API
window.onSpotifyWebPlaybackSDKReady = () => {
    //must update token after an hour  @ https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
  const token = 'BQCrEQlG8vhK7WzeLGsNq7D0nWMEBWVPlF8MAliD_Fxyv1tl0JVVUSznKTmVQGdL5dpWaUCSwvRSPfRZ_NMwlTM9BdTUOVpsydnlPEbQ53CgAlT0PJq16KcN8Mt4kzZnSoQpcoZPGdP3SKz1AJNDhE4gMjWmRI8SIzpo';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player on mobile devices!
  player.connect();
};
