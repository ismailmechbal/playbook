jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1170;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.il-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.il-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.il-overlay').removeClass('is-visible');
		} else {
			$(this).addClass('nav-is-visible');
			$('.il-primary-nav').addClass('nav-is-visible');
			$('.il-main-header').addClass('nav-is-visible');
			$('.il-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.il-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.il-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
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
		toggleSearch('close')
		$('.il-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .il-primary-nav 
	$('.il-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});
	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.il-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.il-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	});

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.il-nav-trigger').removeClass('nav-is-visible');
		$('.il-main-header').removeClass('nav-is-visible');
		$('.il-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.il-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.il-search').removeClass('is-visible');
			$('.il-search-trigger').removeClass('search-is-visible');
			$('.il-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.il-search').toggleClass('is-visible');
			$('.il-search-trigger').toggleClass('search-is-visible');
			$('.il-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.il-search').hasClass('is-visible')) $('.il-search').find('input[type="search"]').focus();
			($('.il-search').hasClass('is-visible')) ? $('.il-overlay').addClass('is-visible') : $('.il-overlay').removeClass('is-visible') ;
		}
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

