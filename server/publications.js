Meteor.publish('Profreviews', function(){
  return Profreviews.find({}, {fields:{userId:1,professorId:1,professorName:1,professorSchool:1,professorDepartment:1,help:1,clarity:1,easy:1}});
});

Meteor.publish('allProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'ratedBy':1}});
});

Meteor.publish('shortProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'slug':1,'department':1,'voted':1,'overall':1}});
});
Meteor.publish('shortSchools', function(){
  return Schools.find({voted:true},{fields: {'name': 1, 'slug':1, 'voted':1,'overall':1}});
});
/*
Meteor.publish('limitedProfessors', function(){
  return Professors.find({voted:true},{fields: {'schoolName': 1, 'schoolId': 1, 'name': 1, 'department':1,'voted':1},'limit':3});
});
*/
Meteor.publish('allSchools', function(){
 return Schools.find({});
});

Meteor.publish('ownProfs', function(schoolId){
  return Professors.find({schoolId:schoolId},{fields: {'schoolId': 1, 'name': 1, 'slug':1, 'department':1}});
});

Meteor.publish('filteredProfs', function(schoolName){
  return Professors.find({schoolName:schoolName},{fields: {'schoolName': 1, 'name': 1, 'slug':1, 'department':1}});
});

Meteor.publish('multipleProfessors', function(profSchool,profName){
  return Professors.find({schoolName:profSchool, name:profName,voted:false}, {fields: {'schoolName':1, 'name':1, 'department':1, 'overall':1,'voted':1}});
});

Meteor.publish('professorReviews', function(professorId){
  return Profreviews.find({professorId:professorId});
});

Meteor.publish('schoolReviews', function(schoolId){
  return Schoolreviews.find({schoolId:schoolId});
});
/*
Meteor.publish('topProfessors', function(){
  return Professors.find({voted:true}, {sort:{overall:-1}}, {fields: {'name':1,'schoolName':1,'department':1,'voted':1,'overall':1}});
});
*/
Meteor.publish('topProfessorsSchool', function(schoolName){
  return Professors.find({schoolName:schoolName,voted:true}, {fields: {'name':1,'schoolName':1,'department':1,'voted':1,'overall':1}}, {sort:{overall:-1},'limit':5});
});

Meteor.publish('singleProfessor', function(professorId){
  return Professors.find({_id:professorId});
});

Meteor.publish('singleSchool', function(schoolId){
  return Schools.find({_id:schoolId});
});

Meteor.publish('myProfReviews', function(){
  var userId = this.userId,
      user = Meteor.users.findOne({_id:userId}),
      hook = user.hook;
  return Profreviews.find({userId:hook}, {fields:{userId:1,professorId:1,professorName:1,professorSchool:1,professorDepartment:1,help:1,clarity:1,easy:1,createdAt:1}}, {sort:{createdAt:-1}});
});

Meteor.publish('mySchoolReviews', function(){
  var userId = this.userId,
      user = Meteor.users.findOne({_id:userId}),
      hook = user.hook;
  return Schoolreviews.find({userId:hook}, {fields:{userUrl:0,graduation:0,comment:0,votes:0,upVoters:0,downVoters:0}}, {sort:{createdAt:-1}});
});

Meteor.publish('rateProfessor', function(profId){
  return Professors.find({_id:profId});
});

Meteor.publish('rateSchool', function(schoolId){
  return Schools.find({_id:schoolId});
});

Meteor.publish("schoolNames", function(){
  return Schools.find({},{fields: {'name': 1}});
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



/*
Meteor.publish('allDepartments', function(){
  return Departments.find({});
});*/