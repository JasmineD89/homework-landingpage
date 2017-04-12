//pseudocode
//add all available city options to the drop down
//make sure the variables are populating the desired section of the dom
//create a funtion that will pick the correct url to display in the background according to the variable selected




//This will wait for the page to load
$(document).ready(function() {

//Creating the different variables available to pick from and will allow me to link up the images
var city = ["ATX", "LA", "NYC", "SF", "SYD"];

//This section will give a value to a selected item in the drop menu. if the value is true, then the value (var city) will populate the dom.
var options = '';
for (var i = 0; i < city.length; i++) {
	options += '<option value="'+ city[i] + '">' + city[i] + '</option>';
}
//this is selecting the id="city-type" from the dom and inserts specified content into the dom. will display in the order it appears in the var above.
$("#city-type").append(options);
	

//this is calling the tag <select> in the dom and using the method change to trigger the function
$("select").change(function() {
//this is setting the value of var city. which states is var city equals what is shown in the id, that is the value.
var city = $("#city-type").val();
		
// this section is saying the 'if' the selected var is "ATX" go into the body and find the class named 'austin'. this will use the img url and add it to the background.
	 if (
	 	city == "ATX"){
        $('body').attr('class','austin');
}
//The 'else if' is saying to trigger the following aside from the initial 'if' statement. Pretty much a continuation of the if statement?

    
   else if (
    	city == "NYC") {
        $('body').attr('class','nyc');	
	} 
	else if (
    	city == 'LA') {
    	$('body').attr('class','la');	    
    } 
    else if (
    	city == 'SF') {
    	$('body').attr('class','sf');
    } 
    else if (
    	city == 'SYD') {
    	$('body').attr('class','sydney');
}


});
});

