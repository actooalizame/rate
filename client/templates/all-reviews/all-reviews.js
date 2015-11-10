Template.profReviews.helpers({
	'allReviews': function(){
		return Profreviews.find({}, {sort: {createdAt:-1}});
	},
	'professorInfo': function(){
		var review = Profreviews.findOne({_id: this._id}),
				professorName = review.professorName,
				professor = Professors.findOne({name:professorName}),
				school = professor.schoolName,
				department = professor.department;
		return school+" | "+department;
	},
	'ownReview': function(){
		var review = Profreviews.findOne({_id: this._id}),
				reviewAuthor = review.userId,
				user = Meteor.user(),
				hook = user.hook;
		if(reviewAuthor===hook){
			return true;
		}

	}
});