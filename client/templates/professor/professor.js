Template.viewProfessor.helpers({
	'isMultiple': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				profSchool = professor.schoolName,
				multiple = professor.multiple;
		if(multiple===true){
			return true;
		}
	},
	'showMultiple': function(){
		var profSchool = Session.get('profSchool');
		if(profSchool!==undefined){
			return true;
		}
	},
	'dynamicHide': function(){
		var profSchool = Session.get('profSchool');
		if(profSchool!==undefined){
			return 'hidden';
		}
	},
	'isZero': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				overall = professor.overall;
		if(overall===0){
			return true;
		}
	},
	'multipleProfessor': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				profName = professor.name,
				profSchool = professor.schoolName;
		return Professors.find({schoolName:profSchool, name:profName});
	},
	'averageHelp': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'avgHelpSvg': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1)*45;
		Session.set('avgHelpSvg',average);
		return average;
	},
	'helpColor': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length);
		if(average<1.9){
			return "#FF0000";
		}
		if(average<2.9){
			return "#FF6600";
		}
		if(average<3.9){
			return "#FFFF00";
		}
		if(average<4.9){
			return "#88FF00";
		}
		if(average===5){
			return "#00FF00";
		}
	},
	'averageClarity': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				clarity = reviews.map(function(a) {return a.clarity;}),
				sum = eval(clarity.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'avgClaritySvg': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				clarity = reviews.map(function(a) {return a.clarity;}),
				sum = eval(clarity.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1)*45;
		return average;
	},
	'clarityColor': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				clarity = reviews.map(function(a) {return a.clarity;}),
				sum = eval(clarity.join('+')),
				length = reviews.count(),
				average  = (sum / length);
		if(average<1.9){
			return "#FF0000";
		}
		if(average<2.9){
			return "#FF6600";
		}
		if(average<3.9){
			return "#FFFF00";
		}
		if(average<4.9){
			return "#88FF00";
		}
		if(average===5){
			return "#00FF00";
		}
	},
	'averageEasy': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				easy = reviews.map(function(a) {return a.easy;}),
				sum = eval(easy.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'avgEasySvg': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				easy = reviews.map(function(a) {return a.easy;}),
				sum = eval(easy.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1)*45;
		return average;
	},
	'easyColor': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				easy = reviews.map(function(a) {return a.easy;}),
				sum = eval(easy.join('+')),
				length = reviews.count(),
				average  = (sum / length);
		if(average<1.9){
			return "#FF0000";
		}
		if(average<2.9){
			return "#FF6600";
		}
		if(average<3.9){
			return "#FFFF00";
		}
		if(average<4.9){
			return "#88FF00";
		}
		if(average===5){
			return "#00FF00";
		}
	},
	'overallScore': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				clarity = reviews.map(function(a) {return a.clarity;}),
				easy = reviews.map(function(a) {return a.easy;}),
				helpSum = eval(help.join('+')),
				claritySum = eval(clarity.join('+')),
				easySum = eval(easy.join('+')),
				overall = [];
		overall.push(helpSum,claritySum,easySum);
		var sum =  eval(overall.join('+')),
				length = (reviews.count())*3,
				average = (sum/length).toFixed(1);
		return average;
	},
	'ratingsExist': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				clarity = reviews.map(function(a) {return a.clarity;}),
				easy = reviews.map(function(a) {return a.easy;});
		if(help.length!==0 && clarity.length!==0 && easy.length!==0 ){
			return true;
		}

	},

	'ratings': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId}, {sort:{createdAt:-1}});
	},
	'ownRating': function(){
		var user = Meteor.user(),
				hook = user.hook,
				professorId = this._id;
		return Profreviews.findOne({userId:hook, professorId:professorId});
	},
	'ratingsCount': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId}).fetch().length;
	},
	'votesCount': function(){
		var reviewId = this._id,
				review = Profreviews.findOne({_id:reviewId});
				upvotes = review.votes;
		return upvotes;
	},
	'disableOwnVote': function(){
		var review = Profreviews.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				userReview = review.userId;
		if(userReview===userId){
			return 'invisible';
		}
	},
	'userUpvoted': function(){
		var review = Profreviews.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				upVoter = review.upVoters,
				array = jQuery.inArray(userId,upVoter);
		if(array>=0){
			return "invisible";
		}
	
	},
	'userDownvoted': function(){
		var review = Profreviews.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				downVoter = review.downVoters,
				array = jQuery.inArray(userId,downVoter);
		if(array>=0){
			return "invisible";
		}
	},
	'userRated': function(){
		var user = Meteor.user(),
				userId = user.hook,
				professorId = this._id,
				professor = Professors.findOne({_id:professorId}),
				rated = professor.ratedBy,
				array = jQuery.inArray(userId,rated);
				//return array;
		if(array>=0){
			return true;
		}
		if(array<0){
			return false;
		}
	}
});

Template.viewProfessor.events({
	'click .view-multiple': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				profName = professor.name,
				profSchool = professor.schoolName;
		Session.set('profSchool',profSchool);
		Session.set('profName',profName);
	},
	'click .btn-edit': function(){
		var reviewId = this._id;
		new Confirmation({
			title: "Tu review perderá todos los puntos al ser editado",
			message: "Estás seguro ?",
			cancelText: "Cancelar",
			okText: "Ok",
			success: true
		}, function (ok) {
			if(ok===true){
				Router.go('/edit-review/'+reviewId);
				Meteor.call('clearVotes',reviewId);
			}
			else{
				return;
			}
		});
	},
	/*'click .clear-multiple': function(){
		Session.set('profSchool',null);
		Session.set('profName', null);
	},*/
	'click .upvote': function(){
		var user = Meteor.user(),
				hook = user.hook,
				review = Profreviews.findOne({_id: this._id}),
				reviewId = review._id;
		Meteor.call('upvoteReview', hook, reviewId);
		
	},
	'click .downvote': function(){
		var user = Meteor.user(),
				hook = user.hook,
				review = Profreviews.findOne({_id: this._id}),
				reviewId = review._id;
		Meteor.call('downvoteReview',hook,reviewId);
		
	}
});