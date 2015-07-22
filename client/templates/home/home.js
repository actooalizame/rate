Template.home.rendered = function(){
	var homeLink = $(".navbar-brand"),
			profLink = $("a.profL"),
			schoolLink = $("a.schoolL"),
			home = $(".home-items"),
			professors = $(".professors"),
			school =$(".school");

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

 $(function() {
    $('.navbar-home a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 69
        },{
        	duration: 1100,
        	easing: "easeInOutQuint"
        });
        event.preventDefault();
    });
});

var sections = $('section'),
		nav = $('.home-nav'),
		defaultItem = $('.navbar-home .nav > li.active'),
		nav_height = nav.outerHeight();
     
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
     
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
     
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');
          defaultItem.removeClass('active');
     
          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });

/*
function setHeight(){
	var windowHeight = $(window).innerHeight(),
			wrapper = $('#wrapper');
	wrapper.css('min-height', windowHeight);
}

setHeight();
*/
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

$(window).resize(function() {
    //setHeight();
    headlineChange();
  });

var $header = $('.navbar-home');
  $(window).scroll(function () {
     if(scrollY <= 0){
         $header.addClass('transparent')
         				.removeClass('nav-active');
     }
     if(scrollY > 20 ){
        $header.addClass('nav-active')
        				.removeClass('transparent');
      }
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