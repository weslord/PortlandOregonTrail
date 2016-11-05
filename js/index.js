$(document).ready(function() {
  var currentCity = 0;
  $('#currentCityName').text(cities[currentCity].name);
  $('#milesToGoNum').text(cities[currentCity].distanceRemaining);   

});
