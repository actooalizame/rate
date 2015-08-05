Template.topProfessors.helpers({
	'hasSession': function(){
		var filter = Session.get('filterSchool');
		if(filter!==undefined){
			return true;
		}
	},

	'topProfs': function(){
		return Professors.find({'voted':true}, {sort:{'overall':-1},limit:5});
	},
	'topProfsSchool': function(){
		var filter = Session.get('filterSchool');
		return Professors.find({'schoolName':filter, 'voted':true}, {sort:{'overall':-1}});
	}
});