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

