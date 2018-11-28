function getExercises(name, id, activities) {
    var queryURL =  'https://api.fitbit.com/1/activities.json';
    $.ajax({
        url: queryURL,
        method: "GET",
        //qs: { access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMzM1OTU5LCJpYXQiOjE1NDMzMDcxNTl9.kO77ILimGLJsJO6DWpH72ox5KQTyfn4hcsUQnjNK5q4' },
      headers: 
       { 
         
         authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMzcwODAzLCJpYXQiOjE1NDMzNDIwMDN9.mWkJ53LSf8Fke5ML85q0nfmMy3snKgwJ-ozNi5NuNSE' }
        }).then(function(res) {
             
            for(var i=0; i<res.categories.length; i++) {
               var name = res.categories[i].name;
               var id = res.categories[i].id;
               var activities = res.categories[i].activities;
               categoriesDrop(activities);
           
    

        };

        })
    };
getExercises();

function categoriesDrop(activities, selectedCategories) {
   
    for(var i=0; i<activities.length; i++){
        var activityOpt = activities[i].name;
      
    var newCategory = $("<option>");
              newCategory.text(activityOpt);           
              $("#categories-drop").append(newCategory);
              $("#confirm").on("click", function(e) {
               
                e.preventDefault();
                var userCategories = document.getElementById("categories-drop");
            
                var selectedCategories = userCategories.options[userCategories.selectedIndex].text;
              
            var test = $(this).data("test");
           
               $("#jinx").data("test", selectedCategories);
              console.log('test:' + $("#jinx".data("test")));
             
                })
            }

}
  





