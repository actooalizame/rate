Meteor.startup(function() {
  Tracker.autorun(function() {
    Meteor.subscribe('hook');
    Meteor.subscribe('university');
    });
  Session.setDefault('credit', 'yes');
});