Template.rateSchool.rendered = function(){

	$('[data-toggle="tooltip"]').tooltip();

	var $reputation = $('#reputation'),
			$location = $('#location'),
			$opportunities = $('#opportunities'),
			$library = $('#library'),
			$infrastructure = $('#infrastructure'),
			$internet = $('#internet'),
			$food = $('#food'),
			$social = $('#social'),
			$sports = $('#sports'),
			$happiness = $('#happiness');

	$reputation.slider();
	$location.slider();
	$opportunities.slider();
	$library.slider();
	$infrastructure.slider();
	$internet.slider();
	$food.slider();
	$social.slider();
	$sports.slider();
	$happiness.slider();

};

Template.rateSchool.helpers({
	'userRated': function(){
		var school = Schools.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				ratedBy = school.ratedBy,
				array = jQuery.inArray(userId,ratedBy);
		if(array>=0){
			return true;
		}
		else if(array===-1){
			return false;
		}
		return array;
	},
	'review': function(){
		var schoolId = this._id,
				user = Meteor.user(),
				userId = user.hook;
		return Schoolreviews.findOne({userId:userId, schoolId:schoolId});
	}
});

Template.rateSchool.events({
	'submit .rate-school': function(event,template){
		event.preventDefault();
		var reputation = template.find('.reputation').value,
				location = template.find('.location').value,
				opportunities = template.find('.opportunities').value,
				library = template.find('.library').value,
				infrastructure = template.find('.infrastructure').value,
				internet = template.find('.internet').value,
				food = template.find('.food').value,
				social = template.find('.social').value,
				sports = template.find('.sports').value,
				happiness = template.find('.happiness').value,
				graduation = event.target.graduation.value,
				comment = event.target.comment.value,
				schoolId = this._id,
				school = Schools.findOne({_id: schoolId}),
				schoolName = school.name,
				user = Meteor.user(),
				userId = user.hook,
				userName = user.profile.name,
				userUrl = user.fb_id;
		var captchaData = grecaptcha.getResponse();
		
		Meteor.call('insertSchoolReview', reputation,location,opportunities,library,infrastructure,internet,food,social,sports,happiness,graduation,comment,captchaData, userId,userName,userUrl,schoolId,schoolName, function(error){
			grecaptcha.reset();
			if (error) {
        return alert(error.reason);
      }
      else {
        Meteor.call('addSchoolRatedBy',schoolId,userId);
        var reviews = Schoolreviews.find({schoolId:schoolId});
				if(reviews.count()===0){
					var overall = [];
					overall.push(reputation,location,opportunities,library,infrastructure,internet,food,social,sports,happiness);
					var sum =  eval(overall.join('+')),
							length = 3,
							average = (sum/length);
					Meteor.call('updateSchoolScore',schoolId,average);
				}
				if(reviews.count()>=1){

					var reputationArray = reviews.map(function(a) {return a.reputation;}),
							reputationSum = eval(reputationArray.join('+'));
					
					var locationArray = reviews.map(function(a) {return a.location;}),
							locationSum = eval(locationArray.join('+'));
					
					var opportunitiesArray = reviews.map(function(a) {return a.opportunities;}),
							opportunitiesSum = eval(opportunitiesArray.join('+'));

					var libraryArray = reviews.map(function(a) {return a.library;}),
							librarySum = eval(libraryArray.join('+'));

					var infrastructureArray = reviews.map(function(a) {return a.infrastructure;}),
							infrastructureSum = eval(infrastructureArray.join('+'));

					var internetArray = reviews.map(function(a) {return a.internet;}),
							internetSum = eval(internetArray.join('+'));

					var foodArray = reviews.map(function(a) {return a.food;}),
							foodSum = eval(foodArray.join('+'));

					var socialArray = reviews.map(function(a) {return a.social;}),
							socialSum = eval(socialArray.join('+'));

					var sportsArray = reviews.map(function(a) {return a.sports;}),
							sportsSum = eval(sportsArray.join('+'));

					var happinessArray = reviews.map(function(a) {return a.happiness;}),
							happinessSum = eval(happinessArray.join('+'));

					var voted = [];
					voted.push(reputationSum,locationSum,opportunitiesSum,librarySum,infrastructureSum,internetSum,foodSum,socialSum,sportsSum,happinessSum);
					var votedSum = eval(voted.join('+'));

					var total = [];
					total.push(votedSum);

					
					var sumReviews =  eval(total.join('+')),
							average = ((sumReviews/3)/(reviews.count())).toFixed(1);
					Meteor.call('updateSchoolScore',schoolId,average);
				}
				Router.go('/school/'+schoolId);
				toastr["success"]("Tu review ha sido publicado.", "Jejeajaej!");
      }
		});
		

	}
});