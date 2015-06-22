Meteor.startup(function() {
  Tracker.autorun(function() {
    Meteor.subscribe('users');
    Meteor.subscribe('hook');
    });
  Session.setDefault('credit', 'yes');
});