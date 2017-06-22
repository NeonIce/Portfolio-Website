$(function() {
	
	
	// mobile navigation toggle
	$('.mobile-toggle').click(function(){
		$('.mobile-toggle').toggleClass('open');
		$('.mobile-nav').slideToggle( "slow", "linear" ).toggleClass('active');
	});
	
	
	// smooth scrolling to location
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		
		var target = this.hash,
		$target = $(target);
		
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-80
		}, 900, 'swing');
	});
	
	
	// return to top of the page - go to Sky High Zone
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.sky-high').fadeIn();
		} else {
			$('.sky-high').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.sky-high').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	



});

