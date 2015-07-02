
Template.allProfessors.helpers({
	'professors': function(){
		return Professors.find({});
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
	'averageClarity': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.clarity;}),
				sum = eval(help.join('+')),
				length = reviews.count(),
				average  = (sum / length).toFixed(1);
		return average;
	},
	'averageEasy': function(){
		var professorId = this._id,
				reviews = Profreviews.find({professorId:professorId}),
				help = reviews.map(function(a) {return a.easy;}),
				sum = eval(help.join('+')),
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
	}
});