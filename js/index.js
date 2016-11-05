$(document).ready(function() {
  var imageInterval = 0;

  var currentCity;
  var mileage; //will be on instance of car
  const TOTALMILES = 1893;

  var cityOptions = [];

  function setUpStart() {
    mileage = 0;
    currentCity = 0;
    $('#currentCityName').text(cities[0].name);
    $('#milesTravelledNum').text(mileage);
    $('#milesToGoNum').text(TOTALMILES);   
    $('<p> <span id="goWest">GO WEST</span></p>').appendTo('.choices');
  }

  function goWest() {
    (currentCity == undefined) ? currentCity = 0 : currentCity++;
    if (currentCity < cities.length) {
      if (currentCity == 0) {
        mileage = TOTALMILES - cities[currentCity].distanceRemaining;
      } else {
        mileage += cities[currentCity - 1].distanceRemaining - cities[currentCity].distanceRemaining;
      }

      $('#currentCityName').text(cities[currentCity].name);
      $('#milesTravelledNum').text(mileage);   
    } else {
      $('#currentCityName').text(cities[cities.length - 1].name);
      $('#milesToGoNum').text(0);   
    }
  }

  setUpStart();

  $('#goWest').on('click', goWest); 

  setInterval(function(){
      imageInterval+=1;
      $('#backgroundImage').css('background-position', imageInterval + 'px 0');
  }, 20);
});
