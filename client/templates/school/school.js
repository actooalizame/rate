Template.viewSchool.helpers({
	'ratingsExist': function(){
		var schoolId = this._id,
				reviews = Schoolreviews.find({schoolId:schoolId}),
				reputation = reviews.map(function(a) {return a.reputation;});
				
		if(reputation.length!==0){
			return true;
		}
	},
	'ownRating': function(){
		var user = Meteor.user(),
				hook = user.hook,
				schoolId = this._id;
		return Schoolreviews.findOne({userId:hook, schoolId:schoolId});
	},
	'userRated': function(){
		var user = Meteor.user(),
				userId = user.hook,
				schoolId = this._id,
				school = Schools.findOne({_id:schoolId}),
				rated = school.ratedBy,
				array = jQuery.inArray(userId,rated);
				//return array;
		if(array>=0){
			return true;
		}
		if(array<0){
			return false;
		}
	}
});