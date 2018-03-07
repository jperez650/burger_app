// alert("The file is linked")

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".burger-eat").on("click", function(event) {

	    var id = $(this).data("id");
	    var newDevoured = $(this).attr("data-newdevoured");

	    var devouredState = {
	      devoured: newDevoured
	    };
	    console.log(devouredState);
	    //Send the PUT request.
	    $.ajax("/api/burgers/" + id, {
	      type: "PUT",
	      data: devouredState
	    }).then(
	      function(data) {
	        console.log("changed devoured to", data);
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );
  	});
  	

	$(".create-form").on("submit", function(event) {
	    // Make sure to preventDefault on a submit event.
	    event.preventDefault();

	    var newBurger = {
	      burger_name: $("input[name=burger_name]").val().trim()
	    };

	    // Send the POST request.
	    $.ajax("/api/burgers", {
	      type: "POST",
	      data: newBurger
	    }).then(
	      function() {
	        console.log("created new burger");
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );
  	});

});