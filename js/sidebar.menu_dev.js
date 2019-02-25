
/*!
 * Sidebar menu for Bootstrap 4
 * Copyright Zdeněk Papučík
 * MIT License
*/
(function($) {

	// toggle sidebar menu
	$('#sidebar').on('click', function() {
		$('#wrapper').toggleClass('toggle');
	});

	// list init
	$('.list-ml-item').each(function() {
		$(this).parent().find('.link-arrow').addClass('up');
		if ($(this).children('.current').length > 0 ) {
			$(this).parents().find('.current').next('.list-ml-none').show();
			$(this).parent().find('.link-arrow').addClass('a down');
		}
	});

	// list open hidden
	$('.list-link').on('click', function() {
		//$(this).parent().find('.link-arrow').toggleClass('b-c');
		$(this).next('.list-ml-none').slideToggle('fast');
	});

	// list transition arrow
	$('.link-arrow').on('click', function() {
		$(this).addClass('transition');
		$(this).toggleClass('rotate');
	});

}(jQuery));
