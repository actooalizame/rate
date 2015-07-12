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
	},/*
	'click .btn-rate':function(){
		Session.set('onProfessors', false);
	}*/
});