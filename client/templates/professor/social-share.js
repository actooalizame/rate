Template.socialShare.rendered = function(){
	$('.fb-share').text("Compartir en Facebook");
	$('.tw-share').text("Compartir en Twitter");
};


Template.socialShare.helpers({
	shareData: function() {
    var resp = {
			title: "Mira el rating del profesor " +this.name+ " en"
    };
    return resp;
  }
});



