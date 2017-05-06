$(function() {

	$('.main__autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  arrows: false,
	  dots: true,
	});
	
	$('.toggle-menu').on('click', function(){
		$('.overlay').fadeIn();
		$('.main__menu ul').fadeIn();
		return false;
	})
	$('.header__main__nav, .overlay').on('click', function(){
		$('.overlay').fadeOut();
		$('.main__menu ul').fadeOut();
	})

});
