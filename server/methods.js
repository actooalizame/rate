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
			ratedBy: []
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
	'insertProfReview': function(captchaData,userId,userName,userUrl,professorId,professorName,courseCode,semester,year,help,clarity,easy,tags,recommend,eligible,sexy,comment,assistance,interest,txtuse,grade,mayor){
		var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
		if (!verifyCaptchaResponse.success) {
      throw new Meteor.Error(422, 'Verifica tu Humanidad!');
    }
    else{
      Profreviews.insert({
				userId: userId,
				userName: userName,
				userUrl: userUrl,
				professorId: professorId,
				professorName: professorName,
				courseCode: courseCode,
				semester: semester,
				year: year,
				help: help,
				clarity: clarity,
				easy: easy,
				tags: tags,
				recommend: recommend,
				eligible: eligible,
				sexy: sexy,
				comment: comment,
				assistance: assistance,
				interest: interest,
				txtuse: txtuse,
				grade: grade,
				mayor: mayor,
				votes: 0,
				upVoters: [],
				downVoters: [],
				createdAt: new Date()
			});
    }
	},
	'updateProfReview': function(reviewId,captchaData,courseCode,semester,year,help,clarity,easy,tags,recommend,eligible,sexy,comment,interest,txtuse,grade,mayor){
		var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
		if (!verifyCaptchaResponse.success) {
      throw new Meteor.Error(422, 'Verifica tu Humanidad!');
    }else{
			Profreviews.update(
				{ _id: reviewId},
				{$set: {
					courseCode:courseCode,
					semester: semester,
					year: year,
					help: help,
					clarity: clarity,
					easy: easy,
					tags: tags,
					recommend: recommend,
					eligible: eligible,
					sexy: sexy,
					comment:comment,
					interest:interest,
					txtuse:txtuse,
					grade:grade,
					mayor:mayor,
					editedAt: new Date()
				}}
			);
		}
	},
	'insertSchoolReview': function(reputation,location,opportunities,library,infrastructure,internet,food,social,sports,happiness,graduation,comment,captchaData, userId,userName,userUrl,schoolId,schoolName){
		var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
		if (!verifyCaptchaResponse.success) {
      throw new Meteor.Error(422, 'Verifica tu Humanidad!');
    }
    else{
      Schoolreviews.insert({
				userId: userId,
				userName: userName,
				userUrl: userUrl,
				schoolId: schoolId,
				schoolName: schoolName,
				reputation: reputation,
				location: location,
				opportunities: opportunities,
				library: library,
				infrastructure: infrastructure,
				internet: internet,
				food: food,
				social: social,
				sports: sports,
				happiness: happiness,
				graduation: graduation,
				comment: comment,
				votes: 0,
				upVoters: [],
				downVoters: [],
				createdAt: new Date()
			});
    }
	},

	'addProfRatedBy': function(professorId, userId){
		Professors.update(
			{	_id: professorId },
			{$push: {ratedBy: userId} }
		);
	},
	'addSchoolRatedBy': function(schoolId, userId){
		Schools.update(
			{	_id: schoolId },
			{$push: {ratedBy: userId} }
		);
	},
	'setVoted': function(professorId){
		Professors.update(
			{_id: professorId },
			{$set: {voted: true} }
		);
	},
	'removeTags': function(reviewId){
		Profreviews.update(
			{	_id: reviewId },
			{$set: {tags: []} }
		);
	},
	'updateProfessorScore': function(professorId,average){
		Professors.update(
			{_id: professorId },
			{$set: {overall: average} }
		);
	},
	'updateSchoolScore': function(schoolId,average){
		Schools.update(
			{_id: schoolId },
			{$set: {overall: average} }
		);
	},
	'upvoteReview': function(hook, reviewId){
		Profreviews.update(
			{ _id: reviewId },
			{$inc: {votes: 1},$push: {upVoters: hook},$pull: {downVoters: hook}}
		);
	},
	'downvoteReview': function(hook, reviewId){
		Profreviews.update(
			{ _id: reviewId },
			{$inc: {votes: -1},$push: {downVoters: hook},$pull: {upVoters: hook}}
		);
	}
});