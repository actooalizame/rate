

Template.socialShare.rendered = function(){
	$('.fb-share').text("Facebook");
	$('.tw-share').text("Twitter");
	$('.google-share').text("Google+");
};


Template.socialShare.helpers({
	shareProfessorData: function() {
    var resp = {
			title: this.name+ " en EvaluaTusProfesores.cl",
			url: "http://telepathiclove.com/professor/"+this._id,
			summary: "Mira este y mas reviews. Rankea a tus profesores y conviertete en TopWriter!"
    };
    return resp;
  }
});



