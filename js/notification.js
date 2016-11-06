function notification(text, cool, cost) {
  $('#notification-text').text(text);
  if (cool > 0) {
    $('#notification-text').text(text);
    $('#notification-cool').text('Gained ' + cool + ' cool points!')
  } else if (cool < 0) {
    var coolString = cool.toString();
    // $('#notification-cool').addClass('loss');
    $('#notification-cool').text('Lost ' + coolString.substring(1, coolString.length) + ' cool points!').css('color', 'red');
  }
  if (cost > 0) {
    $('#notification-cost').text('Gained ' + cost + ' dollars!')

  } else if (cost < 0) {
    var costString = cost.toString();
    // $('#notification-cost').addClass('loss');
    $('#notification-cost').text('Lost ' + costString.substring(1, costString.length) + ' dollars!').css('color', 'red');
  }

  $('#notification').show();//.text();
  $('hi').appendTo('#notification');
  $('#notification').click(function(){
    $('#notification').hide();
    $('#notification-cool').css('color', 'white');
    $('#notification-cost').css('color', 'white');
  });
}
