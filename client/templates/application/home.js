Template.home.helpers({
	'hasUniversity': function(){
		var user = Meteor.user();
		var university = user.university;
		if(university!==""){
			return true;
		}
		else {
			return false;
		}
	}
});