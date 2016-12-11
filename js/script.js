$(function() {

  $('#success').hide();
  $('#startover').addClass('hoverOut');
  var score = 0;

  $('#bее').click(function() {

    score++;
    $('#score').text(score); 
    $('#success').show('fast').fadeOut(1000);     

  });

  $('#startover').hover(function() {
    score = 0;
    $('#score').text(score); 
    $('#startover').addClass('hoverIn').removeClass('hoverOut');
  }, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');

  });


});