Meteor.startup(function() {
  Tracker.autorun(function() {
    Meteor.subscribe('hook');
    Meteor.subscribe('university');
    });
  Session.setDefault('credit', 'Yes');
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
        'appId': '677863165649310'
        //'version': 'v2.1'
    }
    }
});
