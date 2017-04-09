$(document).ready(function() {
	
    var buttonNumber = 0;
    var lArray = [];
    var counter = 0;
    var times = 0;
    var count = 0;

   lArray = JSON.parse(localStorage.getItem("LoveArray"));

    $("#submitLove").on("click", function() {
       	var loveLanguage = $("#love").val().trim();
        if (loveLanguage.length > 0) {
            lArray.push(loveLanguage);
            $("#love").val("");
            console.log(lArray);

           
           
        }
        makeButtons();
        loveButton();
    });



    function makeButtons() {
    
    	
        $("#myLoves").empty();

         buttonNumber = 0;
        for (i = 0; i < lArray.length; i++) {
        	
            var newDiv = $("<div>");
            newDiv.attr("id", "buttonDiv#" + buttonNumber);
            newDiv.addClass("loveDiv");
            newDiv.html(lArray[i]);
            // var newbutton = $("<button>");
            // newbutton.attr("id", "loveButton" + buttonNumber);
            // newbutton.addClass("lButton");
            // newbutton.html(count);
            // newbutton.attr("data-count", buttonNumber)
            // newbutton.attr("data-value", 0);
            // newbutton.html(lArray[i]);
            // newbutton.attr("data", buttonNumber);
            // newDiv.prepend(newbutton);
            $("#myLoves").append(newDiv);
            buttonNumber++;
            localStorage.setItem('LoveArray', JSON.stringify(lArray));
        }

    }
    

    function loveButton() {
    	$(".lButton").on("click", function(){
    		times = parseInt($(this).attr("data-count"))
    		count = (parseInt($(this).attr("data-count")) + 1)
    		console.log(typeof count + count);
    		console.log(typeof times + times); 
    		count++;
    		$("#loveButton" + times).html(count);
  		 	
  		 	makeButtons();
     	   loveButton();
     	   localStorage.setItem("buttonCount", JSON.strigify(count));
     	   console.log(number);
    		});


     //    $(".lButton").on("click", function() {
     //    var n = $(this).attr("data");
     //    console.log(n);
        
    	// lArray.splice(n, 1);
    
    	// console.log(lArray);
     //    makeButtons();
     //    loveButton();

     //    });
    }



makeButtons();
loveButton();

    // loveButton();
	// localStorage.getItem('LoveArray', JSON.parse(lArray));

});
