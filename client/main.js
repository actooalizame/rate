Meteor.startup(function() {
  Tracker.autorun(function() {
    if(Meteor.user()){
      Meteor.subscribe('userData');
      /*Meteor.subscribe('hook');
      Meteor.subscribe('university');*/
    }
    else{
      return;
    }
    });
  Session.setDefault('credit', 'Yes');
  Session.setDefault('onProfessors', false);
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
        //'appId': '677863165649310'
        //'version': 'v2.1'
    }
    }
});

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
/*
Meteor.Spinner.options = {
    lines: 13, // The number of lines to draw
    length: 6, // The length of each line
    width: 3, // The line thickness
    radius: 15, // The radius of the inner circle
    corners: 0.7, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: true, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
*/