Template.appNav.rendered = function(){
	function setHeight() {
		var windowHeight = $(window).innerHeight();
		$('.sidebar-nav ul').css('min-height', windowHeight);
		if(windowHeight<578){
			$('.sidebar-nav').css('overflow-y', 'scroll');
		}
		if(windowHeight>579){
			$('.sidebar-nav').css('overflow-y', 'hidden');
		}
		//$('.sidebar-nav ul').height($(document).height());
		}
setHeight();

$(window).resize(function() {
    setHeight();
  });
};

Template.appNav.events({
	'click .logo-link':function(){
		Session.set('onProfessors', false);
	}
});