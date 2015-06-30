Router.configure({
	layoutTemplate: 'layout'
});

Router.route('home', {
	template: 'home',
	path: '/',
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
			Meteor.subscribe('allSchools'),
			Meteor.subscribe('allDepartments')
		];
	}
});

Router.route('adminData', {
	template: 'adminData',
	path: '/admin',
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
			Meteor.subscribe('allSchools'),
			Meteor.subscribe('allDepartments')
		];
	}
});

Router.route('/rate-professor/:_id', {
	template: 'rateProfessor',
	name: 'rateProfessor',
	data: function(){ return Professors.findOne(this.params._id);},
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
      //Meteor.subscribe('allSchools'),
      Meteor.subscribe('ownReview')
     ];
	}
});

Router.route('/edit-review/:_id', {
	template: 'editReview',
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

Router.route('/professor/:_id', {
	template: 'viewProfessor',
	name: 'viewProfessor',
	data: function(){ return Professors.findOne(this.params._id);},
	waitOn: function(){
		return [
			Meteor.subscribe('allProfessors'),
      //Meteor.subscribe('allSchools'),
      Meteor.subscribe('Profreviews')
     ];
	}
});

Router.route('/rate-school/:_id', {
	template: 'rateSchool',
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
