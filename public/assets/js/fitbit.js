
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

               //console.log(res.categories[i]);
               
               categoriesDrop(activities);
           
    

        };

        })
    };
getExercises();

function categoriesDrop(activities, selectedCategories) {
    //console.log(name);
    for(var i=0; i<activities.length; i++){
        var activityOpt = activities[i].name;
        //console.log(activityOpt);
        //userChoice(activityOpt);
    var newCategory = $("<option>");
              newCategory.text(activityOpt);           
              $("#categories-drop").append(newCategory);

             // console.log(newCategory.text(activityOpt));
             // var stupid = newCategory.text(activityOpt);
              $("#confirm").on("click", function(e) {
                 // console.log(stupid);
                e.preventDefault();
                var userCategories = document.getElementById("categories-drop");
                //var selectedValue = userCategories.options[userCategories.selectedIndex].value;
                var selectedCategories = userCategories.options[userCategories.selectedIndex].text;
                //console.log(selectedCategories);
               // userChoice(selectedCategories);
            var test = $(this).data("test");
            //console.log("")
               $("#jinx").data("test", selectedCategories);
              console.log('test:' + $("#jinx".data("test")));
              //document.write("#jinx") = selectedCategories;

               //console.log(userOption);
                   //console.log(typeof selectedCategories );
                //$("#choice").append(JSON.stringify(selectedCategories));
            
                })
            }

}
  
/*function userChoice(activityOpt, selectedCategories){
   //console.log(activityOpt);
   //console.log(selectedCategories)
   var test = activityOpt;
   var sigh = selectedCategories;
   console.log(test);
   console.log(sigh);
   
    if (test){
       
       
       
    };
    
//}
//bullshit();
}; **/






function showActivities(exercise,selectedCategories) {
    //console.log(exercise);
    //console.log(selectedCategories)
    /*if(selectedCategories===exercise.name){
        console.log("hello");
    }*/
    //showChoice(selectedCategories);
    //console.log(typeof selectedCategories);
    /*function showChoice(selectedCategories) {
        console.log(selectedCategories)
        
    }*/
    
};


