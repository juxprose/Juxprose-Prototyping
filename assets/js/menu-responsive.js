jQuery(document).ready(function($) {
  $('body').addClass('js');
  var $menu = $('#site-navigation'),
  $menulink = $('.menu-link');
  
	$menulink.click(function() {
  	$menulink.toggleClass('active');
  	$menu.toggleClass('active');
  	return false;
	});
});