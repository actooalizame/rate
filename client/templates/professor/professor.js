Template.viewProfessor.helpers({
	'averageHelp': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				averageHelp = professor.help,
				averageSum = eval(averageHelp.join('+')),
				length = averageHelp.length;
		return (averageSum / length).toFixed(1);
	},
	'averageClarity': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				averageClarity = professor.clarity,
				averageSum = eval(averageClarity.join('+')),
				length = averageClarity.length;
		return (averageSum / length).toFixed(1);
	},
	'averageEasy': function(){
		var professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				averageEasy = professor.easy,
				averageSum = eval(averageEasy.join('+')),
				length = averageEasy.length;
		return (averageSum / length).toFixed(1);
	},
	'ratings': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId});
	},
	'ratingsCount': function(){
		var professorId = this._id;
		return Profreviews.find({professorId:professorId}).fetch().length;
	}

});