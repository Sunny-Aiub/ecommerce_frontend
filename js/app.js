$(document).ready(function(){
	$(".dropdown_li .nav-link").on("click", function(event) {
		var parent = $(this).closest(".dropdown_li");

        if(parent.hasClass("active")) {
            parent.removeClass("active");
        } else {
            parent.addClass("active");
            $( ".dropdown_li" ).not( parent ).removeClass( "active" );
        }
        event.preventDefault();
    });
});