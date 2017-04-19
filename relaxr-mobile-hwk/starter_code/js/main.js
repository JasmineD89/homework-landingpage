$(document).ready(function(){

// 	$('ul li:first-child').click(function() {
// 		var menu = $('ul li:not(ul li:first-child)');
// 		menu.slideToggle(100);

// 	})
  
// });

  $("nav li:first-of-type").click(function(){
  	 event.preventDefault();
  	$("ul").toggleClass("open"); 

  	});
  });