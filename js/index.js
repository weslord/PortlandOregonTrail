$(document).ready(function() {
  var imageInterval = 0;

  var currentCity;
  var mileage; //will be on instance of car
  const TOTALMILES = 1893;

  var cityOptions = [];

  function setUpStart() {
    mileage = 0;
    currentCity = 0;
    distanceRemaining = TOTALMILES - mileage;
    $('#currentCityName').text(cities[0].name);
    $('#milesTravelledNum').text(mileage);
    $('#milesToGoNum').text(TOTALMILES);
    $('<p> <span id="goWest">GO WEST</span></p>').appendTo('.choices');

    setCityImage(cities[0]);
  }

  function countdownMilage(){
    var timeInterval = setInterval(function(){
      setRollingImage();
      distanceRemaining--;
      $('#milesToGo').text(distanceRemaining);
      if (distanceRemaining < cities[currentCity + 1].distanceRemaining){
        clearInterval(timeInterval)
        goWest();
      }
    }, 50)
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
    setCityImage(cities[currentCity]);
  }

  function setCityImage(city){
    $('#backgroundImage').hide();
    $('#cityImage').attr("src", city.img);
    $('#cityImage').show();
  }

  function setRollingImage(){
    $('#cityImage').hide();
    $('#backgroundImage').show();
  }

  setUpStart();

  $('#goWest').on('click', countdownMilage);

  setInterval(function(){
      imageInterval+=1;
      $('#backgroundImage').css('background-position', imageInterval + 'px 0');
  }, 20);
});
