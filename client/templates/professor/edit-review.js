Template.editReview.rendered = function(){
	var $helpful =  $("#helpful"),
			$helpfulVal = $("#helpfulVal"),
			$clarity = $("#clarity"),
			$easy = $("#easy"),
			$interest = $("#interest"),
			$txtuse = $('#txtuse');

	$helpful.slider();
	$helpful.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulVal.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1: No help here");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2: You have to beg for help");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3: If you ask for help, it's there");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4: Most likely to help");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5: Saved my semester");
		}
	});

	$clarity.slider();
	$easy.slider();
	$interest.slider();
	$txtuse.slider();

	var countChecked = function() {
		var n = $( "input:checked" ).length;
		console.log( n + (n === 0 ? " is" : " are") + " checked!" );
		if(n === 3 ){
			$('input:not(:checked)').parent('.checkbox-inline').addClass('hidden');
		}
		else if(n < 4){
			$('input:not(:checked)').parent('.checkbox-inline').removeClass('hidden');
		}
	};
	countChecked();
	 
	$( "input[type=checkbox]" ).on( "click", countChecked );

};


Template.editReview.helpers({
	'emptyTags': function(){
		var	reviewId = this._id,
				review = Profreviews.findOne({_id: reviewId});
				tags = review.tags;
		if(tags.length === 0){
			return true;
		}
	}
});


Template.editReview.events({
	'change .yes': function(){
		Session.set('credit', 'Yes');
	},
	'change .no': function(){
		Session.set('credit', 'No');
	},
	'click .edit-tags': function(){
		var	reviewId = this._id,
				review = Profreviews.findOne({_id: reviewId});
				tags = review.tags;
		Meteor.call('removeTags',reviewId);
	},
	'submit .edit-review': function(event,template){
		event.preventDefault();
		var help = template.find('.helpful').value,
				clarity = template.find('.clarity').value,
				easy = template.find('.easy').value,
				credit = Session.get('credit'),
				comment = event.target.comment.value,
				interest = template.find('.interest').value,
				txtuse = template.find('.txtuse').value,
				grade = event.target.grade.value,
				mayor = event.target.mayor.value,
				courseCode = event.target.courseCode.value,
				reviewId = this._id,
				review = Profreviews.findOne({_id: reviewId}),
				professorId = review.professorId,
				professor = Professors.findOne({_id: professorId}),
				professorName = professor.name,
				user = Meteor.user(),
				userId = user.hook;
		var selectedTags = template.findAll( "input[type=checkbox]:checked");
		var tags = _.map(selectedTags, function(item) {return item.defaultValue;});

		Meteor.call('updateProfReview', reviewId,help,clarity,easy,tags,courseCode,credit,comment,interest,txtuse,grade,mayor,function(error){
			if(error){
				return alert(error.reason);
			}
			else {
				Router.go('/professor/'+professorId);
			}
		});
	}
});
