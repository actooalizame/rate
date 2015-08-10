Template.rateSchool.rendered = function(){

	$('[data-toggle="tooltip"]').tooltip();

	var $reputation = $('#reputation'),
			$reputationVal = $('#reputationVal'),
			$reputationTxt = $('#reputationTxt'),
			$location = $('#location'),
			$locationVal = $('#locationVal'),
			$locationTxt = $('#locationTxt'),
			$opportunities = $('#opportunities'),
			$opportunitiesVal = $('#opportunitiesVal'),
			$opportunitiesTxt = $('#opportunitiesTxt'),
			$library = $('#library'),
			$libraryVal = $('#libraryVal'),
			$libraryTxt = $('#libraryTxt'),
			$infrastructure = $('#infrastructure'),
			$infrastructureVal = $('#infrastructureVal'),
			$infrastructureTxt = $('#infrastructureTxt'),
			$internet = $('#internet'),
			$internetVal = $('#internetVal'),
			$internetTxt = $('#internetTxt'),
			$food = $('#food'),
			$foodVal = $('#foodVal'),
			$foodTxt = $('#foodTxt'),
			$social = $('#social'),
			$socialVal = $('#socialVal'),
			$socialTxt = $('#socialTxt'),
			$sports = $('#sports'),
			$sportsVal = $('#sportsVal'),
			$sportsTxt = $('#sportsTxt'),
			$happiness = $('#happiness'),
			$happinessVal = $('#happinessVal'),
			$happinessTxt = $('#happinessTxt');

	$reputation.slider();
	$reputation.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$reputationVal.text("0");
			$reputationTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$reputationVal.text("1");
			$reputationTxt.text("Nadie la conoce");
		}
		if(slideEvt.value===2){
			$reputationVal.text("2");
			$reputationTxt.text("Nadie la respeta");
		}
		if(slideEvt.value===3){
			$reputationVal.text("3");
			$reputationTxt.text("Esta en la media");
		}
		if(slideEvt.value===4){
			$reputationVal.text("4");
			$reputationTxt.text("Bastante respetada");
		}
		if(slideEvt.value===5){
			$reputationVal.text("5");
			$reputationTxt.text("Distinguida");
		}
	});
	$reputation.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$reputationVal.text("0");
			$reputationTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$reputationVal.text("1");
			$reputationTxt.text("Nadie la conoce");
		}
		if(slideEvt.value===2){
			$reputationVal.text("2");
			$reputationTxt.text("Nadie la respeta");
		}
		if(slideEvt.value===3){
			$reputationVal.text("3");
			$reputationTxt.text("Esta en la media");
		}
		if(slideEvt.value===4){
			$reputationVal.text("4");
			$reputationTxt.text("Bastante respetada");
		}
		if(slideEvt.value===5){
			$reputationVal.text("5");
			$reputationTxt.text("Distinguida");
		}
	});

	$location.slider();
	$location.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$locationVal.text("0");
			$locationTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$locationVal.text("1");
			$locationTxt.text("#PeorLugarDelMundo");
		}
		if(slideEvt.value===2){
			$locationVal.text("2");
			$locationTxt.text("No es una muy buena ubicación");
		}
		if(slideEvt.value===3){
			$locationVal.text("3");
			$locationTxt.text("Es un buen Spot");
		}
		if(slideEvt.value===4){
			$locationVal.text("4");
			$locationTxt.text("Me gusta el lugar");
		}
		if(slideEvt.value===5){
			$locationVal.text("5");
			$locationTxt.text("Muy buen lugar para mi gusto");
		}
	});
	$location.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$locationVal.text("0");
			$locationTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$locationVal.text("1");
			$locationTxt.text("#PeorLugarDelMundo");
		}
		if(slideEvt.value===2){
			$locationVal.text("2");
			$locationTxt.text("No es una muy buena ubicación");
		}
		if(slideEvt.value===3){
			$locationVal.text("3");
			$locationTxt.text("Es un buen Spot");
		}
		if(slideEvt.value===4){
			$locationVal.text("4");
			$locationTxt.text("Me gusta el lugar");
		}
		if(slideEvt.value===5){
			$locationVal.text("5");
			$locationTxt.text("Muy buen lugar para mi gusto");
		}
	});

	$opportunities.slider();
	$opportunities.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$opportunitiesVal.text("0");
			$opportunitiesTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$opportunitiesVal.text("1");
			$opportunitiesTxt.text("No me ayudará en nada");
		}
		if(slideEvt.value===2){
			$opportunitiesVal.text("2");
			$opportunitiesTxt.text("No mucho");
		}
		if(slideEvt.value===3){
			$opportunitiesVal.text("3");
			$opportunitiesTxt.text("Existirán oportunidades si me lo propongo");
		}
		if(slideEvt.value===4){
			$opportunitiesVal.text("4");
			$opportunitiesTxt.text("Muchas oportunidades");
		}
		if(slideEvt.value===5){
			$opportunitiesVal.text("5");
			$opportunitiesTxt.text("Una excelente herramienta para mi futuro");
		}
	});
	$opportunities.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$opportunitiesVal.text("0");
			$opportunitiesTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$opportunitiesVal.text("1");
			$opportunitiesTxt.text("No me ayudará en nada");
		}
		if(slideEvt.value===2){
			$opportunitiesVal.text("2");
			$opportunitiesTxt.text("No mucho");
		}
		if(slideEvt.value===3){
			$opportunitiesVal.text("3");
			$opportunitiesTxt.text("Existirán oportunidades si me lo propongo");
		}
		if(slideEvt.value===4){
			$opportunitiesVal.text("4");
			$opportunitiesTxt.text("Muchas oportunidades");
		}
		if(slideEvt.value===5){
			$opportunitiesVal.text("5");
			$opportunitiesTxt.text("Una excelente herramienta para mi futuro");
		}
	});

	$library.slider();
	$library.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$libraryVal.text("0");
			$libraryTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$libraryVal.text("1");
			$libraryTxt.text("No vale la pena visitarla");
		}
		if(slideEvt.value===2){
			$libraryVal.text("2");
			$libraryTxt.text("Con suerte te servirá");
		}
		if(slideEvt.value===3){
			$libraryVal.text("3");
			$libraryTxt.text("Cumple con lo básico");
		}
		if(slideEvt.value===4){
			$libraryVal.text("4");
			$libraryTxt.text("Es recomendable");
		}
		if(slideEvt.value===5){
			$libraryVal.text("5");
			$libraryTxt.text("Era mi segunda casa de estudios");
		}
	});
	$library.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$libraryVal.text("0");
			$libraryTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$libraryVal.text("1");
			$libraryTxt.text("No vale la pena visitarla");
		}
		if(slideEvt.value===2){
			$libraryVal.text("2");
			$libraryTxt.text("Con suerte te servirá");
		}
		if(slideEvt.value===3){
			$libraryVal.text("3");
			$libraryTxt.text("Cumple con lo básico");
		}
		if(slideEvt.value===4){
			$libraryVal.text("4");
			$libraryTxt.text("Es recomendable");
		}
		if(slideEvt.value===5){
			$libraryVal.text("5");
			$libraryTxt.text("Era mi segunda casa de estudios");
		}
	});

	$infrastructure.slider();
	$infrastructure.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$infrastructureVal.text("0");
			$infrastructureTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$infrastructureVal.text("1");
			$infrastructureTxt.text("Mmmm...");
		}
		if(slideEvt.value===2){
			$infrastructureVal.text("2");
			$infrastructureTxt.text("Necesita una mano");
		}
		if(slideEvt.value===3){
			$infrastructureVal.text("3");
			$infrastructureTxt.text("Cumple su función");
		}
		if(slideEvt.value===4){
			$infrastructureVal.text("4");
			$infrastructureTxt.text("Bien");
		}
		if(slideEvt.value===5){
			$infrastructureVal.text("5");
			$infrastructureTxt.text("Una maravilla!");
		}
	});
	$infrastructure.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$infrastructureVal.text("0");
			$infrastructureTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$infrastructureVal.text("1");
			$infrastructureTxt.text("Mmmm...");
		}
		if(slideEvt.value===2){
			$infrastructureVal.text("2");
			$infrastructureTxt.text("Necesita una mano");
		}
		if(slideEvt.value===3){
			$infrastructureVal.text("3");
			$infrastructureTxt.text("Cumple su función");
		}
		if(slideEvt.value===4){
			$infrastructureVal.text("4");
			$infrastructureTxt.text("Bien");
		}
		if(slideEvt.value===5){
			$infrastructureVal.text("5");
			$infrastructureTxt.text("Una maravilla!");
		}
	});

	$internet.slider();
	$internet.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$internetVal.text("0");
			$internetTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$internetVal.text("1");
			$internetTxt.text("Intente reiniciar el modem");
		}
		if(slideEvt.value===2){
			$internetVal.text("2");
			$internetTxt.text("Cargando...");
		}
		if(slideEvt.value===3){
			$internetVal.text("3");
			$internetTxt.text("Funciona para cumplir con lo básico");
		}
		if(slideEvt.value===4){
			$internetVal.text("4");
			$internetTxt.text("Buenos sistemas");
		}
		if(slideEvt.value===5){
			$internetVal.text("5");
			$internetTxt.text("Soplado");
		}
	});
	$internet.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$internetVal.text("0");
			$internetTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$internetVal.text("1");
			$internetTxt.text("Intente reiniciar el modem");
		}
		if(slideEvt.value===2){
			$internetVal.text("2");
			$internetTxt.text("Cargando...");
		}
		if(slideEvt.value===3){
			$internetVal.text("3");
			$internetTxt.text("Funciona para cumplir con lo básico");
		}
		if(slideEvt.value===4){
			$internetVal.text("4");
			$internetTxt.text("Buenos sistemas");
		}
		if(slideEvt.value===5){
			$internetVal.text("5");
			$internetTxt.text("Soplado");
		}
	});

	$food.slider();
	$food.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$foodVal.text("0");
			$foodTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$foodVal.text("1");
			$foodTxt.text("Me hace perder el hambre");
		}
		if(slideEvt.value===2){
			$foodVal.text("2");
			$foodTxt.text("Solo si no tienes otra opción");
		}
		if(slideEvt.value===3){
			$foodVal.text("3");
			$foodTxt.text("Es perfectamente comible");
		}
		if(slideEvt.value===4){
			$foodVal.text("4");
			$foodTxt.text("Variedad de gustos");
		}
		if(slideEvt.value===5){
			$foodVal.text("5");
			$foodTxt.text("A lo Master Chef");
		}
	});
	$food.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$foodVal.text("0");
			$foodTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$foodVal.text("1");
			$foodTxt.text("Me hace perder el hambre");
		}
		if(slideEvt.value===2){
			$foodVal.text("2");
			$foodTxt.text("Solo si no tienes otra opción");
		}
		if(slideEvt.value===3){
			$foodVal.text("3");
			$foodTxt.text("Es perfectamente comible");
		}
		if(slideEvt.value===4){
			$foodVal.text("4");
			$foodTxt.text("Variedad de gustos");
		}
		if(slideEvt.value===5){
			$foodVal.text("5");
			$foodTxt.text("A lo Master Chef");
		}
	});

	$social.slider();
	$social.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$socialVal.text("0");
			$socialTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$socialVal.text("1");
			$socialTxt.text("Existe la vida en este lugar?");
		}
		if(slideEvt.value===2){
			$socialVal.text("2");
			$socialTxt.text("Mejor ir a ver TV en casa");
		}
		if(slideEvt.value===3){
			$socialVal.text("3");
			$socialTxt.text("Lo que uno espera");
		}
		if(slideEvt.value===4){
			$socialVal.text("4");
			$socialTxt.text("Existen muchas actividades");
		}
		if(slideEvt.value===5){
			$socialVal.text("5");
			$socialTxt.text("Lo podrás pasar excelente");
		}
	});
	$social.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$socialVal.text("0");
			$socialTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$socialVal.text("1");
			$socialTxt.text("Existe la vida en este lugar?");
		}
		if(slideEvt.value===2){
			$socialVal.text("2");
			$socialTxt.text("Mejor ir a ver TV en casa");
		}
		if(slideEvt.value===3){
			$socialVal.text("3");
			$socialTxt.text("Lo que uno espera");
		}
		if(slideEvt.value===4){
			$socialVal.text("4");
			$socialTxt.text("Existen muchas actividades");
		}
		if(slideEvt.value===5){
			$socialVal.text("5");
			$socialTxt.text("Lo podrás pasar excelente");
		}
	});

	$sports.slider();
	$sports.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$sportsVal.text("0");
			$sportsTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$sportsVal.text("1");
			$sportsTxt.text("Terminarás oxidado");
		}
		if(slideEvt.value===2){
			$sportsVal.text("2");
			$sportsTxt.text("Algo existe si quieres moverte un poco");
		}
		if(slideEvt.value===3){
			$sportsVal.text("3");
			$sportsTxt.text("Solo lo usual");
		}
		if(slideEvt.value===4){
			$sportsVal.text("4");
			$sportsTxt.text("Mucha variedad");
		}
		if(slideEvt.value===5){
			$sportsVal.text("5");
			$sportsTxt.text("Se nota que se esforzaron en este punto!");
		}
	});
	$sports.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$sportsVal.text("0");
			$sportsTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$sportsVal.text("1");
			$sportsTxt.text("Terminarás oxidado");
		}
		if(slideEvt.value===2){
			$sportsVal.text("2");
			$sportsTxt.text("Algo existe si quieres moverte un poco");
		}
		if(slideEvt.value===3){
			$sportsVal.text("3");
			$sportsTxt.text("Solo lo usual");
		}
		if(slideEvt.value===4){
			$sportsVal.text("4");
			$sportsTxt.text("Mucha variedad");
		}
		if(slideEvt.value===5){
			$sportsVal.text("5");
			$sportsTxt.text("Se nota que se esforzaron en este punto!");
		}
	});

	$happiness.slider();
	$happiness.on("slideStart", function(slideEvt) {

		if(slideEvt.value===0){
			$happinessVal.text("0");
			$happinessTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$happinessVal.text("1");
			$happinessTxt.text(":(");
		}
		if(slideEvt.value===2){
			$happinessVal.text("2");
			$happinessTxt.text("Decepcionado");
		}
		if(slideEvt.value===3){
			$happinessVal.text("3");
			$happinessTxt.text("No me encanta ni me quejo");
		}
		if(slideEvt.value===4){
			$sportsVal.text("4");
			$happinessTxt.text("Contento en general");
		}
		if(slideEvt.value===5){
			$happinessVal.text("5");
			$happinessTxt.text("No puede haber sido mejor estar acá");
		}
	});
	$happiness.on("slide", function(slideEvt) {

		if(slideEvt.value===0){
			$happinessVal.text("0");
			$happinessTxt.text("Evalúa de 1 a 5");
		}
		if(slideEvt.value===1){
			$happinessVal.text("1");
			$happinessTxt.text(":(");
		}
		if(slideEvt.value===2){
			$happinessVal.text("2");
			$happinessTxt.text("Decepcionado");
		}
		if(slideEvt.value===3){
			$happinessVal.text("3");
			$happinessTxt.text("No me encanta ni me quejo");
		}
		if(slideEvt.value===4){
			$happinessVal.text("4");
			$happinessTxt.text("Contento en general");
		}
		if(slideEvt.value===5){
			$happinessVal.text("5");
			$happinessTxt.text("No puede haber sido mejor estar acá");
		}
	});

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
				schoolVoted = school.voted;
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
							length = 10,
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
							average = ((sumReviews/10)/(reviews.count())).toFixed(1);
					Meteor.call('updateSchoolScore',schoolId,average);
				}
				if(schoolVoted===false){ Meteor.call('setVotedSchool', schoolId);}
				Router.go('/school/'+schoolId);
				toastr["success"]("Tu review ha sido publicado.", "Jejeajaej!");
      }
		});
		

	}
});