Template.rateProfessor.rendered = function(){

	var $helpful =  $("#helpful"),
			$helpfulVal = $("#helpfulVal"),
			$clarity = $("#clarity"),
			$easy = $("#easy"),
			$interest = $("#interest"),
			$txtuse = $('#txtuse');

	$helpful.slider();
	$helpful.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulVal.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1: No help here");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2: You have to beg for help");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3: If you ask for help, it's there");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4: Most likely to help");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5: Saved my semester");
		}
	});

	$clarity.slider();
	$easy.slider();
	$interest.slider();
	$txtuse.slider();
};

Template.rateProfessor.helpers({
	'ownProfessor': function(){
		var user = Meteor.user(),
				userSchool = user.university._id,
				professor = Professors.findOne({_id:this._id}),
				professorSchool = professor.schoolId;
		if(userSchool===professorSchool){
			return true;
		}
	},
	'userRated': function(){
		var professor = Professors.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				ratedBy = professor.ratedBy,
				array = jQuery.inArray(userId,ratedBy);
		if(array >=0){
			return true;
		}
	},
	'review': function(){
		var professorId = this._id,
				user = Meteor.user(),
				userId = user.hook;
		return Profreviews.findOne({userId:userId, professorId:professorId});
	}
});


Template.rateProfessor.events({

	'change .yes': function(){
		Session.set('credit', 'Yes');
	},
	'change .no': function(){
		Session.set('credit', 'No');
	},
	'submit .rate-professor': function(event,template){
		event.preventDefault();
		var help = template.find('.helpful').value,
				clarity = template.find('.clarity').value,
				easy = template.find('.easy').value,
				credit = Session.get('credit'),
				comment = event.target.comment.value,
				interest = template.find('.interest').value,
				txtuse = template.find('.txtuse').value,
				grade = event.target.grade.value,
				mayor = event.target.mayor.value,
				courseCode = event.target.courseCode.value,
				professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				professorName = professor.name,
				user = Meteor.user(),
				userId = user.hook,
				userName = user.profile.name,
				userUrl = user.fb_id;
		Meteor.call('insertProfReview', userId,userName,userUrl,professorId,professorName,courseCode,help,clarity,easy,credit,comment,interest,txtuse,grade,mayor, function(error){
			if (error) {
        return alert(error.reason);
      } else {
        Meteor.call('addRatedBy',professorId,userId);
				Router.go('/professor/'+professorId);
      }
		});
		

	}
});