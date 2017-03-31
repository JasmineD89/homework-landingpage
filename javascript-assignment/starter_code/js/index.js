$(document).ready(function(){

$('.read-less-hide a').hide ({

});
});

$("a").click(function(event){
    event.preventDefault();

});



$( ".read-more a" ).click(function() {
  $("p").slideDown("fast", function(){
  	$('.read-more a').hide ();
  	$('.read-less-hide a').show ();




});
});





  $(".read-less-hide a").click(function() {
  $(".secondParagraph").slideUp("fast", function(){
  	$('.read-more a').show ();
  	$('.read-less-hide a').hide ();

});
});



$( ".learn-more" ).click(function() {
  $("#learn-more-text").slideToggle("fast", function(){




});
});



