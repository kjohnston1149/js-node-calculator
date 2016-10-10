$(document).ready(function() {
  $('#calculator-form').hide();
  $('#email').submit(function(event) {
    event.preventDefault();
    var email = $('#address').val();
    $('#email').hide();
    $('#calculator-form').show();
    $('#email-display').text('Thank you! The email ' + email + ' has been saved.');

  });
});
