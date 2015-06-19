Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('allProfessors', function(){
	return Professors.find({});
});

Meteor.publish('allDepartments', function(){
	return Departments.find({});
});