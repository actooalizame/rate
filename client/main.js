Meteor.startup(function() {
  Tracker.autorun(function() {
    if(Meteor.user()){
      Meteor.subscribe('userData');
    }
    else{
      return;
    }
    reCAPTCHA.config({
        publickey: '6LfwAAoTAAAAAGkQy4XR14morF31R4Y-L_qCCr-J'
    });
  });
  Session.setDefault('recommend', 'No');
  Session.setDefault('eligible', 'No');
  Session.setDefault('assistance', 'Obligatoria');
  Session.setDefault('sexy', 'neutro');
  Session.setDefault('onProfessors', false);
  Session.setDefault('countTags', 0);
  Session.setDefault('profSchool', null);
});

UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('DD/MM/YYYY, hh:mm');
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
