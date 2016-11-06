$(document).ready(function() {
  var imageInterval = 0;

  var game = new Game(); 

  var currentCity;
  var currentCityIndex;
  var mileage; //will be on instance of car
  const TOTALMILES = 1893;

  function setCityName(name) {
    $('#currentCityName').text(name);
  }
  function setMilesTravelled(num) {
    $('#milesTravelledNum').text(num);
  }
  function setMilesToGo(num) {
    $('#milesToGoNum').text(num);   
  }
  function setUpStart() {
    var mileage = game.getCar().mileage;
    var cityName = game.currentCity.name;

    setCityName(cityName);
    setMilesTravelled(mileage);
    setMilesToGo(game.TOTALMILES - mileage);

    setCityImage(cities[0]);
  }

  function updateStats() {
    var mileage = game.getCar().mileage;
    var cityName = game.currentCity.name;

    setCityName(cityName);
    setMilesTravelled(mileage);
    setMilesToGo(game.TOTALMILES - mileage);
  }

  function goWest() {
    game.goWest();
    updateStats();
    setCityImage(cities[game.currentCityIndex]);
  }

  function setCityImage(city){
    $('#backgroundImage').hide();
    $('#cityImage').attr("src", city.img);
  }

  setUpStart();

  $('#goWest').on('click', goWest);

  setInterval(function(){
      imageInterval+=1;
      $('#backgroundImage').css('background-position', imageInterval + 'px 0');
  }, 20);
});
