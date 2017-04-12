
//This will wait for the page to load and created my function for when the button is clicked.
$(document).ready(function(){
	$("#submit-btn").click(changeBackground);
	
//Here I created my function and assigned my variable cityTyped will equal id 'city-type' from the dom. which will output a value.
	function changeBackground(){
		var cityTyped = $('#city-type').val();
		
		// var austin = ("Austin", "ATX");
		// var la = ("Los Angeles", "LA");
		// var nyc = ("New York", "NYC");
		// var sf = ("San Fransisco", "SF", "Bay Area");
		// var sydney = ("Sydney", "SYD");
		
//this is providing all of the inputs that would apply to trigger the function to changeBackground. The .attr is calling out a class within css which has the img url for each city.
	 if (
	 	cityTyped === 'New York' || cityTyped === 'NYC' || cityTyped === 'New York City')
        {$('body').attr('class','nyc');}

//The 'else if' is saying to trigger the following aside from the initial 'if' statement. Pretty much a continuation of the if statement?

    else if (
    	cityTyped === 'Austin' || cityTyped === 'ATX')
    	{$('body').attr('class','austin');}
	
	else if (
    	cityTyped === 'Los Angeles' || cityTyped === 'LA' || cityTyped === 'LAX')
    	{$('body').attr('class','la');}
	    
    else if (
    	cityTyped === 'San Fransisco' || cityTyped === 'SF' || cityTyped === 'Bay Area')
    	{$('body').attr('class','sf');}

    else if (
    	cityTyped === 'Austin' || cityTyped === 'ATX' || cityTyped === 'austin')
    	{$('body').attr('class','austin');}

     else if (
    	cityTyped === 'Sydney' || cityTyped === 'SYD' || cityTyped === 'sydney')
    	{$('body').attr('class','sydney');}


	   
//This prevents a form submission. I need to review this part. I have an understanding, but can't explain it. :(
	event.preventDefault();
	}

});
