$(document).ready(function(){
    $('a[href^="#"]').click(function(){
    	var the_id = $(this).attr("href");
    	console.log(the_id);
    	$('html, body').animate({
			scrollTop:$(the_id).offset().top-40	
		}, 'slow');
    	return false;
    });
});