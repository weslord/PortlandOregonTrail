function notification(text) {
  $('#notification').show().text(text);
  $('#notification').click(function(){
    $('#notification').hide();
  });
}
