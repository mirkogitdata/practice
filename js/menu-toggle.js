$( () => {
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
    $('#header').toggleClass('showMenu');
		$('.nav-list').toggleClass('showMenu');
    $('.login').toggleClass('showMenu');
    $('.logo').toggleClass('showMenu');
		$('.lang-menu').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('.lang-menu').removeClass('showMenu');
      $('.logo').removeClass('showMenu');
      $('.login').removeClass('showMenu');
      $('.nav-list').removeClass('showMenu');
      $('#header').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});