Router.configure({
	layoutTemplate: 'layout'
});

Router.route('home', {
	template: 'home',
	loadingTemplate: "loading",
	path: '/',
	waitOn: function(){
		if(Meteor.user()){
			var university = Meteor.user().university;
			if(university===""){
				return [
					Meteor.subscribe('schoolNames')
				];
			}
			else{
				return [];
			}
		}
	}
});


var subs = new SubsManager();


Router.route('/rate-professor/:_id', {
	template: 'rateProfessor',
	loadingTemplate: "loading",
	name: 'rateProfessor',
	
	data: function(){ return Professors.findOne(this.params._id);},
	waitOn: function(){
		var profId = this.params._id;
		return subs.subscribe('rateProfessor',profId);
	}
});

var subsa = new SubsManager();

Router.route('searchProfessors', {
	template: 'searchProfessors',
	loadingTemplate: "loading",
	path: '/search-professors',
	waitOn: function(){
		var school = Session.get('filterSchool');
		if(school!==null){
			return subsa.subscribe('filteredProfs',school);
		}
	}
});

var subsb = new SubsManager();

Router.route('rate', {
	template: 'rate',
	loadingTemplate: "loading",
	path: '/rate',
	waitOn: function(){
		if (Meteor.user()) {
			var schoolId = Meteor.user().university._id;
			return [
				subsb.subscribe('ownProfs',schoolId)
			];
		}
		else {
			Router.go('home');
		}
	}
});

var subsc = new SubsManager();


Router.route('/professor/:_id', {
	template: 'viewProfessor',
	loadingTemplate: "loading",
	name: 'viewProfessor',
	data: function(){ return Professors.findOne(this.params._id);},
	waitOn: function(){
		var professorId = this.params._id;
		return [
			subsc.subscribe('singleProfessor', professorId),
			subsc.subscribe('professorReviews', professorId)
			/*Meteor.subscribe('allProfessors'),
      //Meteor.subscribe('allSchools'),
      Meteor.subscribe('Profreviews')*/
     ];
	}
});

var subsd = new SubsManager();

Router.route('allProfessors', {
	template: 'allProfessors',
	loadingTemplate: "loading",
	path: '/professors',
	waitOn: function(){
		return [
			subsd.subscribe('shortProfessors'),
			subsd.subscribe('Profreviews')
			
		];
	}
});



Router.route('profReviews', {
	template: 'profReviews',
	loadingTemplate: "loading",
	path: '/professors-reviews',
	waitOn: function(){

		return [
			/*Meteor.subscribe('allProfessors'),
			Meteor.subscribe('Profreviews')*/
			
		];
	}
});






Router.route('searchSchools', {
	template: 'searchSchools',
	loadingTemplate: "loading",
	path: '/search-schools',
	waitOn: function(){
		return [
			//Meteor.subscribe('allProfessors'),
			//Meteor.subscribe('Profreviews')
			
		];
	}
});


Router.route('adminData', {
	template: 'adminData',
	loadingTemplate: "loading",
	path: '/admin',
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
			Meteor.subscribe('allSchools'),
			Meteor.subscribe('allDepartments')
		];
	}
});



Router.route('/edit-review/:_id', {
	template: 'editReview',
	loadingTemplate: "loading",
	name: 'editReview',
	data: function(){ return Profreviews.findOne(this.params._id);},
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
      //Meteor.subscribe('allSchools'),
      Meteor.subscribe('Profreviews')
     ];
	}
});

/*
Router.route('/rate-school/:_id', {
	template: 'rateSchool',
	loadingTemplate: "loading",
	name: 'rateSchool',
	data: function(){ return Schools.findOne(this.params._id);},
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
      Meteor.subscribe('allSchools'),
      Meteor.subscribe('allDepartments')
     ];
	}
});
*/


Router.route('addProfessor', {
	template: 'addProfessor',
	path: '/admin/add-professor',
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
			Meteor.subscribe('allSchools'),
			Meteor.subscribe('allDepartments')
		];
	}
});

Router.route('addSchool', {
	template: 'addSchool',
	path: '/admin/add-school',
	waitOn: function(){
		return [
			Meteor.subscribe('allSchools'),
			Meteor.subscribe('allDepartments')
		];
	}
});

var requireLogin = function() {
  if (!Meteor.user()) {
   // If user is not logged in render landingpage
   Router.go('home');
 } else {
   //if user is logged in render whatever route was requested
   this.next();
 }
};

Router.onBeforeAction(requireLogin, {only: ['rate','editReview','rateProfessor']});
