$(document).ready(function() {
	function onScrollInit( items, trigger ) {
	  items.each( function() {
	    var osElement = $(this),
	        osAnimationClass = osElement.attr('data-os-animation'),
	        osAnimationDelay = osElement.attr('data-os-animation-delay');
	      
	        osElement.css({
	          '-webkit-animation-delay':  osAnimationDelay,
	          '-moz-animation-delay':     osAnimationDelay,
	          'animation-delay':          osAnimationDelay
	        });
	
	        var osTrigger = ( trigger ) ? trigger : osElement;
	        
	        osTrigger.waypoint(function() {
	          osElement.addClass('animated').addClass(osAnimationClass);
	          },{
	              triggerOnce: true,
	              offset: '90%'
	        });
	  });
	}
	
	 onScrollInit( $('.os-animation') );
	 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	 
	 
	 $("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;
	
		$("body, html").animate({
			scrollTop: position
		},800);
	});
	
/*
	$('#menuToggle input').click(function(e) {
		$('#menu').toggleClass('active')
	});
*/
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {scrollPage()};

	// Get the header and Section to trigger
	var header = document.getElementById("main-header");
	var featurePage = document.getElementById("feature-page");

	// Get the offset position of the navbar
	var sticky = featurePage.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function scrollPage() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}
	
	
	
	
});