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
	'ratings': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId});
	},
	'ownRating': function(){
		var user = Meteor.user(),
				hook = user.hook,
				professorId = this._id;
		return Profreviews.findOne({userId: hook,professorId:professorId});
	},
	'ratingsCount': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId}).fetch().length;
	}

});