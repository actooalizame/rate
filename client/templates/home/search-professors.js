Template.searchProfessors.events({
	'submit .filter-professors': function(event){
		event.preventDefault();
		var selected = event.target.university.value;
		if(selected!==""){
			Session.set('filterSchool', selected);
		}
		else {
			alert("Elige una universidad!");
		}
	}
});

Template.searchProfessors.helpers({
	'university': function(){
		return Session.get('filterSchool');
	},
	'hasSession': function(){
		var filter = Session.get('filterSchool');
		if(filter!==undefined){
			return true;
		}
	},
	'hiddeClass': function(){
		var filter = Session.get('filterSchool');
		if(filter===undefined){
			return 'hidden';
		}
	}
});

