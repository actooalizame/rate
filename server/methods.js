Meteor.methods({
	'updateUserSchool': function(userId, singleSchool){
		Meteor.users.update(
			{ _id: userId },
			{$set: {university:singleSchool}}
		);
	},
	'insertProfessor': function(name, schoolName, schoolId, department){
		Professors.insert({
			name: name,
			schoolName: schoolName,
			schoolId: schoolId,
			department: department,
			help: [],
			clarity: [],
			easy: [],
			createdAt: new Date()
		});
	},
	'insertSchool': function(name,state){
		Schools.insert({
			name: name,
			state: state,
			done: false
		});
	},
	'insertDepartment': function(schoolId,department){
		Departments.insert({
			schoolId: schoolId,
			department: department
		});
	},
	'setDone': function(schoolId){
		Schools.update(
			{ _id: schoolId},
			{$set: {done:true}}
		);
	},
	'insertProfReview': function(userId,professorId,professorName,courseCode,help,clarity,easy,credit,comment,interest,txtuse,grade,mayor){
		Profreviews.insert({
			userId: userId,
			professorId: professorId,
			professorName: professorName,
			courseCode: courseCode,
			help: help,
			clarity: clarity,
			easy: easy,
			credit: credit,
			comment: comment,
			interest: interest,
			txtuse: txtuse,
			grade: grade,
			mayor: mayor,
			createdAt: new Date()
		});
	},
	'pushHelp': function(professorId,help){
		Professors.update(
			{	_id: professorId },
			{$push: {help: help}}
		);
	},
	'pushClarity': function(professorId,clarity){
		Professors.update(
			{	_id: professorId },
			{$push: {clarity: clarity}}
		);
	},
	'pushEasy': function(professorId,easy){
		Professors.update(
			{	_id: professorId },
			{$push: {easy: easy}}
		);
	}
});