Meteor.methods({
	'updateUserSchool': function(userId, singleSchool){
		var user = Meteor.users.findOne(this.userId),
				fb_id = user.services.facebook.id;
		Meteor.users.update(
			{ _id: userId },
			{$set: {
				university:singleSchool,
				fb_id: fb_id
			}}
		);
	},
	'insertProfessor': function(name, schoolName, schoolId, department){
		Professors.insert({
			name: name,
			schoolName: schoolName,
			schoolId: schoolId,
			department: department,
			ratedBy: [],
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
	'insertProfReview': function(userId,userName,userUrl,professorId,professorName,courseCode,help,clarity,easy,tags,credit,comment,interest,txtuse,grade,mayor){
		Profreviews.insert({
			userId: userId,
			userName: userName,
			userUrl: userUrl,
			professorId: professorId,
			professorName: professorName,
			courseCode: courseCode,
			help: help,
			clarity: clarity,
			easy: easy,
			tags: tags,
			credit: credit,
			comment: comment,
			interest: interest,
			txtuse: txtuse,
			grade: grade,
			mayor: mayor,
			createdAt: new Date()
		});
	},
	'updateProfReview': function(reviewId,help,clarity,easy,tags,courseCode,credit,comment,interest,txtuse,grade,mayor){
		Profreviews.update(
			{ _id: reviewId},
			{$set: {
				help: help,
				clarity: clarity,
				easy: easy,
				tags: tags,
				courseCode:courseCode,
				credit:credit,
				comment:comment,
				interest:interest,
				txtuse:txtuse,
				grade:grade,
				mayor:mayor
			}}
		);
	},
	'addRatedBy': function(professorId, userId){
		Professors.update(
			{	_id: professorId },
			{$push: {ratedBy: userId} }
		);
	},
	'removeTags': function(reviewId){
		Profreviews.update(
			{	_id: reviewId },
			{$set: {tags: []} }
		);
	}
});