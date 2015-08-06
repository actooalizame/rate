Template.viewProfessor.helpers({
	'averageHelp': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
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
	'averageEasy': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				easy = reviews.map(function(a) {return a.easy;}),
				sum = eval(easy.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
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
		return Profreviews.find({professorId:professorId});
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
	},/*,
	'disableOwnVote': function(){
		var reviewId = this._id,
				review = Profreviews.findOne({_id: reviewId}),
				rewiewUser = review.userId,
				user = Meteor.user(),
				userId = user.hook;
		if(rewiewUser===userId){
			console.log(userId);
		}
		console.log(rewiewUser);
	}*/
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