Template.rate.helpers({
	'hasUniversity': function(){
		var user = Meteor.user();
		var university = user.university;
		/*if(university!==""){
			return true;
		}*/
		return university;
	}
});