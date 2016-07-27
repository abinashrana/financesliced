$(function() {

	$("#owl-banner").owlCarousel({
		autoPlay:3000,
		pagination:true,
		stopOnHover:true,
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
	
	var owl = $("#owl-logo");
	owl.owlCarousel({
		itemsCustom : [
			[0, 2],
			[480, 3],
			[700, 5]
		],
		pagination:false,
		navigation : true
	});

	$("#myModal").modal();

});