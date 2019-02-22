
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

	// init menu
	$('ul.menu li').each(function() {
		$(this).parent().find('li.parent a.employ').addClass('up');
		if ($(this).children('li.parent a.current').length > 0 ) {
			$(this).parents().find('a.current').next('ul.submenu').show();
			$(this).parent().find('li.parent a.employ').addClass('active down');
		}
	});

	// active menu
	$('ul.menu li a').on('click', function() {
		$(this).parent('li.parent').find('a.employ').toggleClass('active');
		$(this).next('ul.submenu').slideToggle('fast');
	});

	// click transition
	$('a.employ').on('click', function() {
		$(this).addClass('transition');
		$(this).toggleClass('rotate');
	});

}(jQuery));
