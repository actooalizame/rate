Template.rateProfessor.rendered = function(){

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
			$interestVal = $('#interestVal'),
			$interestTxt = $('#interestTxt'),
			$txtuse = $('#txtuse'),
			$txtuseVal = $('#txtuseVal'),
			$txtuseTxt = $('#txtuseTxt');

	$helpful.slider();
	$helpful.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulTxt.text("Evalúa de 1 a 5");
			$helpfulVal.text("0");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1");
			$helpfulTxt.text("No te ayudará");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2");
			$helpfulTxt.text("Ruega por su ayuda");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3");
			$helpfulTxt.text("Si le pides ayuda, estará ahí");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4");
			$helpfulTxt.text("Te intentara ayudar constantemente");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5");
			$helpfulTxt.text("Me salvo el semestre!");
		}
	});
	$helpful.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$helpfulVal.text("0");
			$helpfulTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$helpfulVal.text("1");
			$helpfulTxt.text("No te ayudará");
		}
		if(slideEvt.value===2){
			$helpfulVal.text("2");
			$helpfulTxt.text("Ruega por su ayuda");
		}
		if(slideEvt.value===3){
			$helpfulVal.text("3");
			$helpfulTxt.text("Si le pides ayuda, estará ahí");
		}
		if(slideEvt.value===4){
			$helpfulVal.text("4");
			$helpfulTxt.text("Te intentara ayudar constantemente");
		}
		if(slideEvt.value===5){
			$helpfulVal.text("5");
			$helpfulTxt.text("Me salvo el semestre!");
		}
	});

	$clarity.slider();
	$clarity.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$clarityVal.text("0");
			$clarityTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$clarityVal.text("1");
			$clarityTxt.text("Como dijo que dijo?");
		}
		if(slideEvt.value===2){
			$clarityVal.text("2");
			$clarityTxt.text("Confuso");
		}
		if(slideEvt.value===3){
			$clarityVal.text("3");
			$clarityTxt.text("Se entiende el mensaje");
		}
		if(slideEvt.value===4){
			$clarityVal.text("4");
			$clarityTxt.text("Bastante claro");
		}
		if(slideEvt.value===5){
			$clarityVal.text("5");
			$clarityTxt.text("Claro como el agua");
		}
	});
	$clarity.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$clarityVal.text("0");
			$clarityTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$clarityVal.text("1");
			$clarityTxt.text("Como dijo que dijo?");
		}
		if(slideEvt.value===2){
			$clarityVal.text("2");
			$clarityTxt.text("Confuso");
		}
		if(slideEvt.value===3){
			$clarityVal.text("3");
			$clarityTxt.text("Se entiende el mensaje");
		}
		if(slideEvt.value===4){
			$clarityVal.text("4");
			$clarityTxt.text("Bastante claro");
		}
		if(slideEvt.value===5){
			$clarityVal.text("5");
			$clarityTxt.text("Claro como el agua");
		}
	});
	$easy.slider();
	$easy.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$easyVal.text("0");
			$easyTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$easyVal.text("1");
			$easyTxt.text("Reprobaras!");
		}
		if(slideEvt.value===2){
			$easyVal.text("2");
			$easyTxt.text("Necesitas esforzarte para pasar");
		}
		if(slideEvt.value===3){
			$easyVal.text("3");
			$easyTxt.text("La dificultad que corresponde");
		}
		if(slideEvt.value===4){
			$easyVal.text("4");
			$easyTxt.text("Facilito");
		}
		if(slideEvt.value===5){
			$easyVal.text("5");
			$easyTxt.text("Clase tomada, clase pasada");
		}
	});
	$easy.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$easyVal.text("0");
			$easyTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$easyVal.text("1");
			$easyTxt.text("Reprobaras!");
		}
		if(slideEvt.value===2){
			$easyVal.text("2");
			$easyTxt.text("Necesitas esforzarte para pasar");
		}
		if(slideEvt.value===3){
			$easyVal.text("3");
			$easyTxt.text("La dificultad que corresponde");
		}
		if(slideEvt.value===4){
			$easyVal.text("4");
			$easyTxt.text("Facilito");
		}
		if(slideEvt.value===5){
			$easyVal.text("5");
			$easyTxt.text("Clase tomada, clase pasada");
		}
	});
	$interest.slider();
	$interest.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$interestVal.text("0");
			$interestTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$interestVal.text("1");
			$interestTxt.text("Te quedaras sin batería en el celular");
		}
		if(slideEvt.value===2){
			$interestVal.text("2");
			$interestTxt.text("Muy bajo");
		}
		if(slideEvt.value===3){
			$interestVal.text("3");
			$interestTxt.text("Algo de interés");
		}
		if(slideEvt.value===4){
			$interestVal.text("4");
			$interestTxt.text("Bastante interesante");
		}
		if(slideEvt.value===5){
			$interestVal.text("5");
			$interestTxt.text("Una de mis clases preferidas");
		}
	});
	$interest.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$interestVal.text("0");
			$interestTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$interestVal.text("1");
			$interestTxt.text("Te quedaras sin batería en el celular");
		}
		if(slideEvt.value===2){
			$interestVal.text("2");
			$interestTxt.text("Muy bajo");
		}
		if(slideEvt.value===3){
			$interestVal.text("3");
			$interestTxt.text("Algo de interés");
		}
		if(slideEvt.value===4){
			$interestVal.text("4");
			$interestTxt.text("Bastante interesante");
		}
		if(slideEvt.value===5){
			$interestVal.text("5");
			$interestTxt.text("Una de mis clases preferidas");
		}
	});

	$txtuse.slider();
	$txtuse.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$txtuseVal.text("0");
			$txtuseTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$txtuseVal.text("1");
			$txtuseTxt.text("Que material?");
		}
		if(slideEvt.value===2){
			$txtuseVal.text("2");
			$txtuseTxt.text("A veces entrego algo básico");
		}
		if(slideEvt.value===3){
			$txtuseVal.text("3");
			$txtuseTxt.text("Sirve como apoyo");
		}
		if(slideEvt.value===4){
			$txtuseVal.text("4");
			$txtuseTxt.text("Muy completo");
		}
		if(slideEvt.value===5){
			$txtuseVal.text("5");
			$txtuseTxt.text("Es excelente como ayuda");
		}
	});
	$txtuse.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$txtuseVal.text("0");
			$txtuseTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$txtuseVal.text("1");
			$txtuseTxt.text("Que material?");
		}
		if(slideEvt.value===2){
			$txtuseVal.text("2");
			$txtuseTxt.text("A veces entrego algo básico");
		}
		if(slideEvt.value===3){
			$txtuseVal.text("3");
			$txtuseTxt.text("Sirve como apoyo");
		}
		if(slideEvt.value===4){
			$txtuseVal.text("4");
			$txtuseTxt.text("Muy completo");
		}
		if(slideEvt.value===5){
			$txtuseVal.text("5");
			$txtuseTxt.text("Es excelente como ayuda");
		}
	});


	var countChecked = function() {
		var n = $( ".tags input:checked" ).length;
		if(n === 3 ){
			$('input:not(:checked)').parent('.checkbox-success').addClass('hidden');
		}
		else if(n < 3){
			$('input:not(:checked)').parent('.checkbox-success').removeClass('hidden');
		}
	};
	countChecked();
	 
	$( "input[type=checkbox]" ).on( "click", countChecked );

};

Template.rateProfessor.helpers({
	/*'ownProfessor': function(){
		var user = Meteor.user(),
				userSchool = user.university._id,
				professor = Professors.findOne({_id:this._id}),
				professorSchool = professor.schoolId;
		if(userSchool===professorSchool){
			return true;
		}
	},*/
	'userRated': function(){
		var professor = Professors.findOne({_id: this._id}),
				user = Meteor.user(),
				userId = user.hook,
				ratedBy = professor.ratedBy,
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
		var professorId = this._id,
				user = Meteor.user(),
				userId = user.hook;
		return Profreviews.findOne({userId:userId, professorId:professorId});
	}
});


Template.rateProfessor.events({

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
	'change .assistanceYes': function(){
		Session.set('assistance', 'Obligatoria');
	},
	'change .assistanceNo': function(){
		Session.set('assistance', 'No Obligatoria');
	},
	'click #checkboxSexy': function(event,template){
		var sexy = $('#checkboxSexy');
		if(sexy.is(':checked')){
			Session.set('sexy', 'Si');
		}
		else{
			Session.set('sexy', 'Neutro');
		}
	},
	'click .cancel': function(){
		var professorId = this._id;
		Session.set('recommend', 'No');
		Session.set('eligible', 'No');
		toastr["error"]("Tu review ha sido cancelado.", "Atencion!");
	},
	'submit .rate-professor': function(event,template){
		event.preventDefault();
		var user = Meteor.user(),
				userId = user.hook,
				userName = user.profile.name,
				userUrl = user.fb_id,
				professorId = this._id,
				professor = Professors.findOne({_id: professorId}),
				professorName = professor.name,
				professorSchool = professor.schoolName,
				professorDepartment = professor.department,
				courseCode = event.target.courseCode.value,
				semester = event.target.semester.value,
				year = event.target.year.value,
				help = template.find('.helpful').value,
				clarity = template.find('.clarity').value,
				easy = template.find('.easy').value,
				selectedTags = template.findAll( "input:not('#checkboxSexy')[type=checkbox]:checked"),
				tags = _.map(selectedTags, function(item) {return item.defaultValue;}),
				recommend = Session.get('recommend'),
				eligible = Session.get('eligible'),
				sexy = Session.get('sexy'),
				comment = event.target.comment.value,
				assistance = Session.get('assistance'),
				interest = template.find('.interest').value,
				txtuse = template.find('.txtuse').value,
				grade = event.target.grade.value,
				mayor = event.target.mayor.value;
				professorVoted = professor.voted;
		var captchaData = grecaptcha.getResponse();
		
		Meteor.call('insertProfReview',captchaData,userId,userName,userUrl,professorId,professorName,professorSchool,professorDepartment,courseCode,semester,year,help,clarity,easy,tags,recommend,eligible,sexy,comment,assistance,interest,txtuse,grade,mayor, function(error){
			grecaptcha.reset();
			if (error) {
        return alert(error.reason);
      }
      else {
        Meteor.call('addProfRatedBy',professorId,userId);
        Session.set('sexy', 'Neutro');
        var reviews = Profreviews.find({professorId:professorId});
				if(reviews.count()===0){
					var overall = [];
					overall.push(help,clarity,easy);
					var sum =  eval(overall.join('+')),
							length = 3,
							average = (sum/length);
					Meteor.call('updateProfessorScore',professorId,average);
				}
				if(reviews.count()>=1){

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
					Meteor.call('updateProfessorScore',professorId,average);
				}
        if(professorVoted===false){ Meteor.call('setVoted', professorId);}
				Router.go('/professor/'+professorId);
				toastr["success"]("Tu review ha sido publicado.", "Jejeajaej!");
      }
		});
		

	}
});