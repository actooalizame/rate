Template.addProfessor.helpers({
	'schools': function(){
		return Schools.find({});
	},
	'departments': function(){
		var schoolName = Session.get('university');
		var school = Schools.findOne({name: schoolName});
		var schoolId = school._id;
		var departments = Departments.find({schoolId: schoolId});
		return departments;
	}
});

Template.addProfessor.events({
	'submit .add-professor': function(event,template){
		event.preventDefault();
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var name = firstName+' '+lastName;
		var schoolName = Session.get('university');
		var singleSchool = Schools.findOne({name:schoolName});
		var schoolId = singleSchool._id;
		var department = Session.get('department');
		Meteor.call('insertProfessor', name,schoolName,schoolId,department);
		event.target.firstName.value = "";
		event.target.lastName.value = "";
		template.find('.university').value = "";
		template.find('.department').value = "";
	},
	'change .university': function(event, template){
		var value = template.find('.university').value;
		Session.set('university', value);
	},
	'change .department': function(event, template){
		var value = template.find('.department').value;
		Session.set('department', value);
	}
});