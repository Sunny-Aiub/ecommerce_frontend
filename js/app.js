$(document).ready(function(){
	$('#navbar_open').on("click",function(event) {
	    event.preventDefault();
	   
		var side_navbar = $('.side_navbar');
		if(side_navbar.hasClass("active")) {
			side_navbar.removeClass("active");
		} else {
			side_navbar.addClass("active");
		}
		
		var wrapper = $('.wrapper_background');
		if(wrapper.hasClass("wrapper_active")) {
			wrapper.removeClass("wrapper_active");
		} else {
			wrapper.addClass("wrapper_active");
		}
	});
	$(".wrapper_background").on("click", function() {
		$('.side_navbar').removeClass("active");
	});
	$(".wrapper_background").on("click", function() {
		$('.wrapper_background').removeClass("wrapper_active");
	});
});