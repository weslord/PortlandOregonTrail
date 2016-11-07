$('#notification').click(function(){
  $('#notification').hide();
  $('#notification-cool').css('color', 'white');
  $('#notification-cost').css('color', 'white');
  $('#notification').css('top', '100%');
});

function notification(text, cool, cost) {
  $('#notification-cool').text('');
  $('#notification-cost').text('');
  $('#notification-text').text(text);
  if (cool > 0) {
    $('#notification-text').text(text);
    $('#notification-cool').text('Gained ' + cool + '% coolness!').css('color', 'lime');
  } else if (cool < 0) {
    var coolString = cool.toString();
    // $('#notification-cool').addClass('loss');
    $('#notification-cool').text('Lost ' + coolString.substring(1, coolString.length) + '% coolness!').css('color', 'red');
  }
  if (cost > 0) {
    $('#notification-cost').text('Gained $' + cost + '!').css('color', 'lime');

  } else if (cost < 0) {
    var costString = cost.toString();
    // $('#notification-cost').addClass('loss');
    $('#notification-cost').text('Lost $' + costString.substring(1, costString.length) + '!').css('color', 'red');
  }
  
  $('#notification').show();
  $('#notification').animate({top:'0px'},1000);

  $('hi').appendTo('#notification');

  $('#notification').click(function(){
    $('#notification').hide();
    $('#notification-cool').text('');
    $('#notification-cost').text('');
    $('#notification-cool').css('color', 'white');
    $('#notification-cost').css('color', 'white');
  });
}
