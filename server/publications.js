Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('allProfessors', function(){
	return Professors.find({},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'ratedBy':1}});
});



Meteor.publish('allDepartments', function(){
	return Departments.find({});
});

Meteor.publish("schoolNames", function(){
  return Schools.find({},{fields: {'name': 1}});
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





Meteor.publish("ownProfs", function(schoolId){
  //var user = this.userId,
      //schoolId = user.university._id;
  return Professors.find({schoolId:schoolId},{fields: {'schoolId': 1, 'name': 1, 'department':1}});
});

Meteor.publish('filteredProfs', function(schoolName){
  return Professors.find({schoolName:schoolName},{fields: {'schoolName': 1, 'name': 1, 'department':1}});
});

Meteor.publish('userData',function(){
  return Meteor.users.find(this.userId, {fields: {'hook': 1, 'fb_id': 1, 'university':1 }});
});
/*
Meteor.startup(function(){
  Professors._ensureIndex({schoolId:1});
  Professors._ensureIndex({schoolName:1});
});
*/


Meteor.publish('Profreviews', function(){
	return Profreviews.find({});
});