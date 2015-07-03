Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('allProfessors', function(){
	return Professors.find({});
});

Meteor.publish('allDepartments', function(){
	return Departments.find({});
});
/*
Meteor.publish("ownReview", function(){
  var user = Meteor.users.findOne(this.userId);
  var creator = user.hook;
  if(user!==null){
    return Profreviews.find({userId: creator });
  }
  else {
    return false;
  }
});*/

Meteor.publish('hook', function() {
  return Meteor.users.find(this.userId, {fields: {
    hook: 1
  }});
});

Meteor.publish('fbId', function() {
    return Meteor.users.find(this.userId, {fields: {
      fb_id: 1
    }
  });
});

Meteor.publish('university', function() {
  return Meteor.users.find(this.userId, {fields: {
    university: 1
  }});
});

Meteor.publish('Profreviews', function(){
	return Profreviews.find({});
});