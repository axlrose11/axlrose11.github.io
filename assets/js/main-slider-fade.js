	'use strict';

	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true,
			pauseOnHover: false,
		});
	});


	// Check FIREFOX
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}

	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}

	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}

	// 02. FULLSCREEN CLASS
	//==================================================================================
	// var fullscreen = function(){
	// 	var fheight = $(window).height();
	// 	$('.fullscreen').css("height",fheight);
	// }

	//Execute on load
	// fullscreen();
	//
	// //Execute on window resize
	// $(window).resize(function() {
	// 	fullscreen();
	// });
