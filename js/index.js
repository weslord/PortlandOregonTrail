$(document).ready(function() {
  var currentCity = 0;
  var imageInterval = 0;
  $('#currentCityName').text(cities[currentCity].name);
  $('#milesToGoNum').text(cities[currentCity].distanceRemaining);

  setInterval(function(){
      imageInterval-=1;
      $('#backgroundImage').css('background-position', imageInterval + 'px 0');
  }, 10);
});
