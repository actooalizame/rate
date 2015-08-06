Template.myReviews.helpers({
	'profReviews': function(){
		var user = Meteor.user(),
				hook = user.hook;
		return Profreviews.find({userId:hook});
	},
	'professors': function(){
		return Professors.find({voted:true},{sort:{overall:-1}});
	},
	'averageHelp': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'averageClarity': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.clarity;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'averageEasy': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.easy;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'overallScore': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
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
	}
});