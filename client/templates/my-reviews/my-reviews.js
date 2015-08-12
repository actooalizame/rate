Template.myReviews.rendered = function(){
	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
};


Template.myReviews.helpers({
	'profReviews': function(){
		var user = Meteor.user(),
				hook = user.hook;
		return Profreviews.find({userId:hook},{sort:{createdAt:-1}});
	},
	'schoolReviews': function(){
		var user = Meteor.user(),
				hook = user.hook;
		return Schoolreviews.find({userId:hook},{sort:{createdAt:-1}});
	},
	'averageProfHelp': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.help;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'averageProfClarity': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.clarity;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'averageProfEasy': function(){
		var reviewId = this._id,
				reviews = Profreviews.find({_id:reviewId}),
				help = reviews.map(function(a) {return a.easy;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'overallProfScore': function(){
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
	},
	'averageSchoolReputation': function(){
		var reviewId = this._id,
				reviews = Schoolreviews.find({_id:reviewId}),
				reputation = reviews.map(function(a) {return a.reputation;}),
				sum = eval(reputation.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
});