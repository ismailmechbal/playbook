jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1170;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//close lateral menu on mobile
	$('.il-overlay').on('swiperight', function(){
		if($('.il-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.il-overlay').removeClass('is-visible');
		}
	});
	$('.nav-on-left .il-overlay').on('swipeleft', function(){
		if($('.il-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.il-overlay').removeClass('is-visible');
		}
	});
	$('.il-overlay').on('click', function(){
		closeNav();
		$('.il-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .il-primary-nav
	$('.il-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});

	//Toggle nav
	$('nav a').click(function() {
		toggleNav();
	});

	function toggleNav() {
		$('.il-overlay').toggleClass('is-visible');
		$('#il-primary-nav').toggleClass('moves-out')
		$('.il-secondary-nav').toggleClass('is-hidden')
	}


	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window,
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.il-nav');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.il-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.il-main-content');
		}
	}
});
