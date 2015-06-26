Meteor.startup(function() {
  Tracker.autorun(function() {
    Meteor.subscribe('hook');
    Meteor.subscribe('university');
    });
  Session.setDefault('credit', 'yes');
});

ShareIt.configure({
  useFB: true,
  useTwitter: true,
  useGoogle: true,
  classes: "btn",
  iconOnly: false,
  applyColors: true,
  sites: {
    'facebook': {
        'appId': ''
        //'version': 'v2.1'
    }
    }
});
