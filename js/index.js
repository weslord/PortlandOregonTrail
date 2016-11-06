$(document).ready(function() {
  var imageInterval = $( window ).width();
  var game = new Game();
  const TOTALMILES = 1893;

  var currentCity;
  var currentCityIndex;
  var mileage; //will be on instance of car
  var distanceRemaining = TOTALMILES;

  function setCityName(name) {
    $('#currentCityName').text(name);
  }
  function setMilesTravelled(num) {
    $('#milesTravelledNum').text(num);
  }
  function setMilesToGo(num) {
    $('#milesToGoNum').text(num);
  }
  function setMilesToNext(num) {
    $('#milesToNextNum').text(num);
  }
  function setCoolPoints(num) {
    $('#coolPointsNum').text(num);
  }
  function setMoney(num) {
    $('#moneyLeftNum').text(num);
  }
  function setGas(num) {
    $('#gasRemainingNum').text(num);
  }
  function setUpStart() {
    var mileage = game.getCar().mileage;
    var cityName = game.currentCity.name;

    setCityName(cityName);
    setMilesTravelled(mileage);
    setMilesToGo(game.TOTALMILES - mileage);
    setCoolPoints(game.cool);
    setMoney(game.wealth);
    setGas(game.getCar().currentTank);

    // setCityImage(cities[0]);
    $('#cityImage').hide();
  }

  function countdownMilage(){
    var milesInTurn = 0;
    setRollingImage();
    var timeInterval = setInterval(function(){
      var nextCityDist = cities[game.currentCityIndex + 1].distanceRemaining;
      distanceRemaining--;
      milesInTurn++;
      setMilesToGo(distanceRemaining);
      setMilesToNext(distanceRemaining - nextCityDist + 1);
      setMilesTravelled(TOTALMILES - distanceRemaining);
      if (distanceRemaining < nextCityDist){
        clearInterval(timeInterval)
        goWest();
      }
      if (milesInTurn > 49){
        clearInterval(timeInterval);
        updateStats();
        stopScrollingBackground();

      }

    }, 50)
  }
  function updateStats() {
    var mileage = game.getCar().mileage;
    var cityName = game.currentCity.name;

    setCityName(cityName);
   // setMilesTravelled(mileage);
   // setMilesToGo(game.TOTALMILES - mileage);
    setCoolPoints(game.cool);
    setMoney(game.wealth);
    setGas(game.getCar().currentTank);
  }

  function goWest() {
    game.goWest();
    updateStats();
    stopScrollingBackground();
    // setCityImage(cities[game.currentCityIndex]);
  }

  function setCityImage(city){
    stopScrollingBackground();
    $('#backgroundImage').hide();
    $('#cityImage').attr("src", city.img);
    $('#cityImage').fadeIn(1000, null);
  }

  function setRollingImage(){
    startScrollingBackground();
    $('#cityImage').hide();
    $('#backgroundImage').fadeIn(1000, null);
  }

  setUpStart();

  $('#goWest').on('click', countdownMilage);

  var scrollBackground;

  function stopScrollingBackground(){
      clearInterval(scrollBackground);
  }

  function startScrollingBackground(){
    scrollBackground = setInterval(function(){
        imageInterval+=1.6;
        $('#backgroundImage').css('background-position', imageInterval + 'px 0');
    }, 20);
  }


});
