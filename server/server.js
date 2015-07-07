Accounts.onCreateUser(function(options, user) {
	var randomInt = Math.floor(Math.random()*100000000);
	user.hook = randomInt.toString();
	user.university = "";
	user.fb_id = "";
  if (options.profile)
    user.profile = options.profile;
  return user;
});

