$(document).ready(function() {
  $('#calculator-form').hide();
  $('#email').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#email').hide();
    $('#calculator-form').show();
    // $('#email-display').text($('#email').val());

  });
});
