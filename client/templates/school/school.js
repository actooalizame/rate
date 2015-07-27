Template.viewSchool.helpers({
	'ratingsExist': function(){
		var schoolId = this._id,
				reviews = Schoolreviews.find({schoolId:schoolId}),
				reputation = reviews.map(function(a) {return a.reputation;});
				
		if(reputation.length!==0){
			return true;
		}

	}
});