

Template.socialShare.rendered = function(){
	$('.fb-share').text("Facebook");
	$('.tw-share').text("Twitter");
	$('.google-share').text("Google+");
};


Template.socialShare.helpers({
	shareData: function() {
    var resp = {
			title: "Mira el rating del profesor " +this.name+ " en",
			url: "http://telepathiclove.com/professor/"+this._id
    };
    return resp;
  }
});



