// JavaScript Document

$(document).ready(function() {
	// Masonry
	$('.portfolio-gal').isotope({
		// options...
		itemSelector: '.portfolio-gal .image-masonry',
		// masonry: {
		//   columnWidth: 200
		// }
	});
	
	// Image Loadead Masonry
	var $grid = $('.portfolio-gal').isotope({
		// options...
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress(function () {
		$grid.isotope('layout');
	});

	// OFI Browser
	objectFitImages();
});
