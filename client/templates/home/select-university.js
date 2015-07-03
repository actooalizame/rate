Template.selectUniversity.helpers({
	'schools': function(){
		return Schools.find({});
	}
});

Template.selectUniversity.events({
	'change .user-school': function(event, template){
		var option = template.find('.user-school').value;
	},
	'click .add-user-school': function(event,template){
		var user = Meteor.user(),
				userhook = user.hook,
				singleUser = Meteor.users.findOne({hook: userhook}),
				userId = singleUser._id,
				userSchool = template.find('.user-school').value;
		if(userSchool==="not"){
			alert("Debes elegir una universidad");
		}
		else{
			var singleSchool = Schools.findOne({name:userSchool});
			Meteor.call('updateUserSchool', userId, singleSchool);
		}
	}
});