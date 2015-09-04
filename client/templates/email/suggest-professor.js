Template.suggestProfessor.events({
	'submit .suggest-professor': function(e){
		e.preventDefault();
		var user = Meteor.user(),
				userName = user.profile.name,
				fb_id = user.fb_id,
				name = event.target.names.value,
				lastName = event.target.lastnames.value,
				school = event.target.school.value,
				department = event.target.department.value,
				comment = event.target.comment.value;
		var to = 'actooalizame@gmail.com',
				from = userName,
				subject = "El usuario " + userName + " ha sugerido un profesor inexistente",
				text = "Nombre: " + name + "\n" + "Apellidos " + lastName + "\n" + "Universidad: " + school + "\n" + "Facultad: " + department + "\n" + "Comentario: " + comment + "\n" + "Usuario: https://www.facebook.com/app_scoped_user_id/" + fb_id;
		Meteor.call('sendEmail', to, from, subject, text);
		Router.go('/rate');
		toastr["success"]("Nos contactaremos contigo a la brevedad", "Recibido!");
	}

});