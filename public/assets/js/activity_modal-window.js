var modal = (function(){ //Declare modal object
    var $window = $(window);
    var $modal = $('<div class="modal"/>'); //Create markup for modal
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">close</button>');
    
    $modal.append($content, $close); //Add close button to modal

    $close.on('click', function(e) { //when user clicks on close 
        e.preventDefault();          //Prevent link behavior
        modal.close();                 //Close modal
    });

    return {                                //add code to modal
        center: function() {                //define center method
            //calculate distance from top to left of window to center of modal
            var top = Math.max($window.height( - $modal.outerHeight(), 0) / 2);
            var left = Math.max($window.width( - $modal.outerWidth(), 0) / 2);
            $modal.css({                    //css for modal
                top: top + $window.scrollTop(), //center vertically
                left: left + $window.scrollLeft()   //center horizontally
            });
        },
        open: function(settings) {              //define open() method
            $content.empty().append(settings.content);  //set new content of modal

            $modal.css({                        //set modal dimensions
                width: settings.width || 'auto',    //set width
                height: settings.height || 'auto'   //set height
            }).appendTo('body');                    //add it to the page

            modal.center();                     //call center() method
            $(window).on('resize', modal.center);       //call if  window resized
            //modal.radio();
            //modal.fitibit();
        },
        close: function() {             //define close() method
            $content.empty();           //remove content from modal
            $modal.detach();            //remove modal from page
            $(window).off('resize', modal.center);      //remove event handler
        },
        

       
    };

    var form, options, other, hide; //declare variables
        form = document.getElementById("test"); //get form
        options = form.elements.heard; //get radio buttons

        $("#confirm").on("click", function(e) {

            //if ('chk',)
            var choice= document.getElementById("categories-drop");
            var userChoice = choice.options[choice.selectedIndex].text;
            console.log(choice);

           
        })

   
    
}());

