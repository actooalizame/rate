Meteor.startup(function() {
  Tracker.autorun(function() {
    Meteor.subscribe('hook');
    Meteor.subscribe('university');
    });
  Session.setDefault('credit', 'yes');
});

ShareIt.configure({
  sites: {                // nested object for extra configurations
        'facebook': {
            'appId': '677863165649310'   // use sharer.php when it's null, otherwise use share dialog
        }
    },
  useFB: true,          // boolean (default: true)
  useTwitter: true,     // boolean (default: true)
  useGoogle: false,      // boolean (default: true)
  usePinterest: false,
  classes: "btn", // string (default: 'large btn')
  iconOnly: false,       // boolean (default: false)
  applyColors: true     // boolean (default: true)
});
