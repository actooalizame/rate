

Template.searchProfessors.events({
	'change .filter-school': function(event,template){
		Session.set('filterSchool',template.find('.filter-school').value);
	}
});