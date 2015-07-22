Template.editReview.rendered = function(){
	$('[data-toggle="tooltip"]').tooltip();


	var $helpful =  $("#helpful"),
			$helpfulVal = $("#helpfulVal"),
			$helpfulTxt = $('#helpfulTxt'),
			$clarity = $("#clarity"),
			$clarityVal = $('#clarityVal'),
			$clarityTxt = $('#clarityTxt'),
			$easy = $("#easy"),
			$easyVal = $("#easyVal"),
			$easyTxt = $('#easyTxt'),
			$interest = $("#interest"),
			$txtuse = $('#txtuse');

	$helpful.slider();
	$helpful.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulTxt.text("Rate from 1 to 5");
			$helpfulVal.text("0");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1");
			$helpfulTxt.text("No help here");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2");
			$helpfulTxt.text("You have to beg for help");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3");
			$helpfulTxt.text("If you ask for help, it's there");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4");
			$helpfulTxt.text("Most likely to help");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5");
			$helpfulTxt.text("Saved my semester");
		}
	});
	$helpful.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulVal.text("0");
			$helpfulTxt.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1");
			$helpfulTxt.text("No help here");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2");
			$helpfulTxt.text("You have to beg for help");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3");
			$helpfulTxt.text("If you ask for help, it's there");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4");
			$helpfulTxt.text("Most likely to help");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5");
			$helpfulTxt.text("Saved my semester");
		}
	});

	$clarity.slider();
	$clarity.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$clarityVal.text("0");
			$clarityTxt.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$clarityVal.text("1");
			$clarityTxt.text("Say What?!");
		}
		if(slideEvt.value===2){
			$clarityVal.text("2");
			$clarityTxt.text("Confusing");
		}
		if(slideEvt.value===3){
			$clarityVal.text("3");
			$clarityTxt.text("Pretty Clear");
		}
		if(slideEvt.value===4){
			$clarityVal.text("4");
			$clarityTxt.text("Clear-cut");
		}
		if(slideEvt.value===5){
			$clarityVal.text("5");
			$clarityTxt.text("Crystal-Clear");
		}
	});
	$clarity.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$clarityVal.text("0");
			$clarityTxt.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$clarityVal.text("1");
			$clarityTxt.text("Say What?!");
		}
		if(slideEvt.value===2){
			$clarityVal.text("2");
			$clarityTxt.text("Confusing");
		}
		if(slideEvt.value===3){
			$clarityVal.text("3");
			$clarityTxt.text("Pretty Clear");
		}
		if(slideEvt.value===4){
			$clarityVal.text("4");
			$clarityTxt.text("Clear-cut");
		}
		if(slideEvt.value===5){
			$clarityVal.text("5");
			$clarityTxt.text("Crystal-Clear");
		}
	});
	$easy.slider();
	$easy.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$easyVal.text("0");
			$easyTxt.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$easyVal.text("1");
			$easyTxt.text("Hardest thing I've ever done");
		}
		if(slideEvt.value===2){
			$easyVal.text("2");
			$easyTxt.text("Makes you work for it");
		}
		if(slideEvt.value===3){
			$easyVal.text("3");
			$easyTxt.text("The usual");
		}
		if(slideEvt.value===4){
			$easyVal.text("4");
			$easyTxt.text("Easy A");
		}
		if(slideEvt.value===5){
			$easyVal.text("5");
			$easyTxt.text("Show up & pass");
		}
	});
	$easy.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$easyVal.text("0");
			$easyTxt.text("Rate from 1 to 5");
		}
		if(slideEvt.value===1){
			$easyVal.text("1");
			$easyTxt.text("Hardest thing I've ever done");
		}
		if(slideEvt.value===2){
			$easyVal.text("2");
			$easyTxt.text("Makes you work for it");
		}
		if(slideEvt.value===3){
			$easyVal.text("3");
			$easyTxt.text("The usual");
		}
		if(slideEvt.value===4){
			$easyVal.text("4");
			$easyTxt.text("Easy A");
		}
		if(slideEvt.value===5){
			$easyVal.text("5");
			$easyTxt.text("Show up & pass");
		}
	});
	$interest.slider();
	$txtuse.slider();

	var countChecked = function() {
		var n = $( "input:checked" ).length;
		if(n === 3 ){
			$('input:not(:checked)').parent('.checkbox-inline').addClass('hidden');
		}
		else if(n < 3){
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
	},
	'hiddeTags': function(){
		var tags = Session.get('countTags');
		if(tags===3){
			return 'invisible';
		}
	}
});


Template.editReview.events({
	'change .recommendYes': function(){
		Session.set('recommend', 'Si');
	},
	'change .recommendNo': function(){
		Session.set('recommend', 'No');
	},
	'change .eligibleYes': function(){
		Session.set('eligible', 'Si');
	},
	'change .eligibleNo': function(){
		Session.set('eligible', 'No');
	},
	'change .sexyYes': function(){
		Session.set('sexy', 'Si');
	},
	'change .sexyNo': function(){
		Session.set('sexy', 'No');
	},
	'click .edit-tags': function(){
		var	reviewId = this._id,
				review = Profreviews.findOne({_id: reviewId});
				tags = review.tags;
		Meteor.call('removeTags',reviewId);
		//Router.go('rate');
	},
	'click input[type=checkbox]': function(){
		Session.set("countTags", Session.get("countTags") + 1);
	},
	'submit .edit-review': function(event,template){
		event.preventDefault();
		var semester = event.target.semester.value,
				year = event.target.year.value,
				help = template.find('.helpful').value,
				clarity = template.find('.clarity').value,
				easy = template.find('.easy').value,
				eligible = Session.get('eligible'),
				recommend = Session.get('recommend'),
				sexy = Session.get('sexy'),
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
		var captchaData = grecaptcha.getResponse();
		var reviewTags = review.tags;
		if(reviewTags.length===0){
			var selectedTags = template.findAll( "input[type=checkbox]:checked");
			var tags = _.map(selectedTags, function(item) {return item.defaultValue;});
			Meteor.call('updateProfReview', reviewId,captchaData,courseCode,semester,year,help,clarity,easy,tags,recommend,eligible,sexy,comment,interest,txtuse,grade,mayor,function(error){
				grecaptcha.reset();
				if(error){
					return alert(error.reason);
				}
				else {
					Session.set("countTags", 0);
					var reviews = Profreviews.find({professorId:professorId});
					var overall = [];
					overall.push(help,clarity,easy);
					var sum =  eval(overall.join('+')),
							length = 3,
							average = (sum/length);
					var helpArray = reviews.map(function(a) {return a.help;}),
							helpSum = eval(helpArray.join('+'));
					
					var clarityArray = reviews.map(function(a) {return a.clarity;}),
							claritySum = eval(clarityArray.join('+'));
					
					var easyArray = reviews.map(function(a) {return a.easy;}),
							easySum = eval(easyArray.join('+'));

					var voted = [];
					voted.push(helpSum,claritySum,easySum);
					var votedSum = eval(voted.join('+'));

					var total = [];
					total.push(votedSum);

					
					var sumReviews =  eval(total.join('+')),
							average = ((sumReviews/3)/(reviews.count())).toFixed(1);
					console.log(average);
					Meteor.call('updateProfessorScore',professorId,average);
					Router.go('/professor/'+professorId);
				}
			});
		}
		else if(reviewTags.length>0){
			var tags = reviewTags;
			Meteor.call('updateProfReview', reviewId,captchaData,courseCode,semester,year,help,clarity,easy,tags,recommend,eligible,sexy,comment,interest,txtuse,grade,mayor,function(error){
				grecaptcha.reset();
				if(error){
					return alert(error.reason);
				}
				else {
					Session.set("countTags", 0);
					var reviews = Profreviews.find({professorId:professorId});
					var overall = [];
					overall.push(help,clarity,easy);
					var sum =  eval(overall.join('+')),
							length = 3,
							average = (sum/length);
					var helpArray = reviews.map(function(a) {return a.help;}),
							helpSum = eval(helpArray.join('+'));
					
					var clarityArray = reviews.map(function(a) {return a.clarity;}),
							claritySum = eval(clarityArray.join('+'));
					
					var easyArray = reviews.map(function(a) {return a.easy;}),
							easySum = eval(easyArray.join('+'));

					var voted = [];
					voted.push(helpSum,claritySum,easySum);
					var votedSum = eval(voted.join('+'));

					var total = [];
					total.push(votedSum);

					
					var sumReviews =  eval(total.join('+')),
							average = ((sumReviews/3)/(reviews.count())).toFixed(1);
					console.log(average);
					Meteor.call('updateProfessorScore',professorId,average);
					Router.go('/professor/'+professorId);
				}
			});
		}
	}
});
