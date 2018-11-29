function getExercises(name, id, activities) {
    var queryURL =  'https://api.fitbit.com/1/activities.json';
    $.ajax({
        url: queryURL,
        method: "GET",
        //qs: { access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMzM1OTU5LCJpYXQiOjE1NDMzMDcxNTl9.kO77ILimGLJsJO6DWpH72ox5KQTyfn4hcsUQnjNK5q4' },
      headers: 
       { 
         
         authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzNTYxNTU3LCJpYXQiOjE1NDM1MzI3NTd9.Ph70nWMlM18UTjo22Ov8VRhedYW_2bNcHAgaDxf85lY' }
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

function categoriesDrop(activities) {
   
    for(var i=0; i<activities.length; i++){
        var activityOpt = activities[i].name;
      
    var newCategory = $("<option>");
              newCategory.text(activityOpt);           
              $("#categories-drop").append(newCategory);

            }

          


}





  





