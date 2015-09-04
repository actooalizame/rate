Accounts.onCreateUser(function(options, user) {
	var randomInt = Math.floor(Math.random()*100000000);
	user.hook = randomInt.toString();
	user.university = "";
	user.fb_id = "";
  if (options.profile)
    user.profile = options.profile;
  return user;
});

Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: '6LfwAAoTAAAAAAEHOk1eF1IyFBnOLMmX-LFiWEbS'
    });
});

process.env.MAIL_URL="smtp://hermeskikkin%40gmail.com:@smtp.gmail.com:25/";

