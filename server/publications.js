Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('allProfessors', function(){
	return Professors.find({});
});

Meteor.publish('allDepartments', function(){
	return Departments.find({});
});

Meteor.publish('hook', function() {
  return Meteor.users.find(this.userId, {fields: {
    hook: 1
  }});
});

Meteor.publish('Profreviews', function(){
	return Profreviews.find({});
});