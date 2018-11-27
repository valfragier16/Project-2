
   
    var $content = $('#share-options').detach(); //remove modal from page
    //e.preventDefault(); 
    $('#share').on('click', function(e) { //to open modal will be on add activity main page
       
        modal.open({content: $content, width:340, height:300});
        //modal.fitbit();
        e.preventDefault(); 
    });
    //e.preventDefault(); 
