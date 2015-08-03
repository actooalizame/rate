Template.home.rendered = function(){
	var homeLink = $(".navbar-brand"),
			profLink = $("button.profL"),
			schoolLink = $("button.schoolL"),
			home = $(".home-items"),
			professors = $(".professors"),
			school =$(".school");


/* HIDES-DISPLAYS ELEMENTS ON FOLD */

$(profLink).on('click',function(){
  professors.removeClass('hidden')
            .addClass('block');
  home.addClass('hidden');
});

$(schoolLink).on('click',function(){
  school.removeClass('hidden')
            .addClass('block');
  home.addClass('hidden');
});

$(homeLink).on('click',function(){
  home.removeClass('hidden')
            .addClass('block');
  school.addClass('hidden');
  professors.addClass('hidden');
});

var onProfessors = Session.get('onProfessors');
if(onProfessors===true){
	professors.removeClass('hidden')
            .addClass('block');
  home.addClass('hidden');
}


/* NAVIGATION LINKS ON SCROLL & CLICK EVENT */

var defaultItem = $('.navbar-home .nav > li.active'),
		item = $('.navbar-home .nav > li a');

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	$(document).off("scroll");

	item.each(function () {
		$(this).removeClass('active');
	});
	$(this).addClass('active');

	var target = this.hash,
			$target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 1100, 'easeInOutQuint', function () {
		window.location.hash = target;
		$(document).on("scroll", onScroll);
		defaultItem.removeClass("active");
	});
});

	function onScroll(event){
	var scrollPosition = $(document).scrollTop();
	item.each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if (refElement.position().top-69 <= scrollPosition && refElement.position().top-69 + refElement.height() > scrollPosition) {
			item.removeClass("active");
			currentLink.addClass("active");
		} else {
		currentLink.removeClass("active");
		defaultItem.removeClass("active");
		}
	});
}

$(document).on("scroll", onScroll);

/* SET FOLD HEIGHT */

function setHeight(){
	var windowHeight = $(window).innerHeight(),
			wrapper = $('#wrapper');
	wrapper.css('min-height', windowHeight);
}

setHeight();


/* CHANGE HEADLINE ON HOVER */

function headlineChange(){
	var headline = $('.headline-change'),
		rate = $('a.btn-rate'),
		login = $('.login'),
		windowWidth = (window).innerWidth;

	if(windowWidth>767){
		profLink.mouseover(function(){
			headline.text("the professor");
		});

		profLink.mouseleave(function(){
			headline.text("what");
		});

		schoolLink.mouseover(function(){
			headline.text("the school");
		});

		schoolLink.mouseleave(function(){
			headline.text("what");
		});

		login.mouseover(function(){
			headline.text("the outlet");
		});

		login.mouseleave(function(){
			headline.text("what");
		});

		rate.mouseover(function(){
			headline.text("the outlet");
		});

		rate.mouseleave(function(){
			headline.text("what");
		});
	}
}

headlineChange();


/* CHANGE NAV BACKGROUND ON SCROLL */

function changeNav(){

	var $header = $('.navbar-home'),
			windowWidth = (window).innerWidth;

	$(window).scroll(function () {
		if(pageYOffset <= 0){
			$header.addClass('transparent').removeClass('nav-active');
		}
		if(pageYOffset > 20){
			$header.addClass('nav-active').removeClass('transparent');
		}
		if( windowWidth < 767) {
			$header.addClass('navbar-inverse').removeClass('transparent');
		}
	});

	if(windowWidth<768){
		$header.addClass('navbar-inverse').removeClass('transparent').removeClass('nav-active');
	}
}
changeNav();

$(window).resize(function() {
  setHeight();
  headlineChange();
  changeNav();
});

};

Template.home.helpers({
	'hasUniversity': function(){
		var user = Meteor.user();
		var university = user.university;
		if(university!==""){
			return true;
		}
	}
});

Template.home.events({
	'click .professors': function(){
		Session.set('onProfessors', true);
	}
});