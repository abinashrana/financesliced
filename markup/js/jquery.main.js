$(function () {

	$("#owl-banner").owlCarousel({
	/*	autoPlay: 3000,*/
		pagination: true,
		stopOnHover: true,
		navigation: false, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

	var owl = $("#owl-logo");
	owl.owlCarousel({
		itemsCustom: [
				[0, 2],
				[480, 3],
				[680, 4],
				[992, 5]
			],
		pagination: false,
		navigation: true
	});

	$("#owl-story").owlCarousel({
		pagination: false,
		stopOnHover: true,
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

	$("#myModal").modal();

	/*var $searchlink = $('#searchlink');

	// hover effect
	$searchlink.on('click', function () {
		$(this).addClass('open');
	}).on('mouseout', function () {
		$(this).removeClass('open');
	});*/

	$('.parent-container').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		gallery: {
			enabled: true
		},
		type: 'image'
			// other options
	});

	/*jQuery(".pull_feedback").toggle(function () {
			jQuery("#feedback").animate({
				left: "0px"
			});
			return false;
		},
		function () {
			jQuery("#feedback").animate({
				left: "-362px"
			});
			return false;
		}
	); //toggle
	}); //document.ready
*/
	/*toggles*/
	
	/*$(".left-cnt").hide();*/
	$(".icn-call-nav").click(function() {
		$(".left-cnt").toggleClass('open');
	});
	
	$(".icn-search").click(function() {
		$(".searchform").toggleClass('open');
	});
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});
	
});