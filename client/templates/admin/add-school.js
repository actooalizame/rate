Template.addSchool.helpers({

});

Template.addSchool.events({
	'submit .add-school': function(event){
		event.preventDefault();
		var name = event.target.schoolName.value;
		var state = event.target.schoolState.value;
		Meteor.call('insertSchool',name,state);
		event.target.schoolName.value = "";
		event.target.schoolState.value = "";
	}
});