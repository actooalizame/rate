Template.appNav.rendered = function(){
	function setHeight() {
		var windowHeight = $(window).innerHeight(),
				windowWidth = $(window).innerWidth(),
				sidebar = $('.sidebar-nav'),
				nav = $('.sidebar-nav ul');

		nav.css('min-height', windowHeight);

		if(windowHeight<652){
			sidebar.css('overflow-y', 'scroll');
		}
		if(windowHeight>652){
			sidebar.css('overflow-y', 'hidden');
		}
		if(windowWidth<768){
			nav.css('min-height', windowHeight/2);
			sidebar.css('overflow-y', 'hidden');
		}
		//$('.sidebar-nav ul').height($(document).height());
	}
setHeight();

$(window).resize(function() {
    setHeight();
  });
};

Template.appNav.helpers({
	'activeClass': function(){
		
	}
});

Template.appNav.events({
	'click .logo-link':function(){
		Session.set('onProfessors', false);
	}
});