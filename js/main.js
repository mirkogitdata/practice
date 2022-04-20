$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
   
	  const windowTop = $(window).scrollTop();
    const windowWidth = window.innerWidth;
    if(windowWidth > 995) {
    windowTop > 100 ? $('header').addClass('navShadow') : $('header').removeClass('navShadow');
    windowTop > 100 ? $('.nav-link').addClass('navShadow') : $('.nav-link').removeClass('navShadow');
    windowTop > 100 ? $('.logo').addClass('navShadow') : $('.logo').removeClass('navShadow');
		windowTop > 100 ? $('header').css('top','-32px') : $('header').css('top','0px');
    windowTop > 100 ? $('header').css('background','var(--orange)') : $('header').css('background','none');
    windowTop > 100 ? $('header').css('transition','0.7s cubic-bezier(0.165, 0.84, 0.44, 1) all') : $('header').css('transition','none');
    windowTop > 100 ? $('.nav-link').css('color','var(--white)') : $('.nav-link').css('color','var(--violet-dark)');
    windowTop > 100 ? $('header .logo a p').css('color','var(--white)') : $('header .logo a p').css('color','var(--violet-dark)');
    } else if (windowWidth < 995) {
			windowTop > 100 ? $('header').css('top','0px') : $('header').css('top','0px');
		} else {
			windowTop = 0;
		}
	});

	// Initiate the wowjs
	new WOW().init();
	
	//Click Logo To Scroll To Top
	$('.logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});

});