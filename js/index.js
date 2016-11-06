$(document).ready(function() {
  var imageInterval = $( window ).width();
  var game = new Game();
  const TOTALMILES = 1893;

  var currentCity;
  var currentCityIndex;
  var mileage; //will be on instance of car
  var distanceRemaining = TOTALMILES;

  var selectedCharacters = [];

  function setCityName(name) {
    $('#currentCityName').text(name);
  }
  function setMilesTravelled(num) {
    $('#milesTravelledNum').text(Math.floor(num));
  }
  function setMilesToGo(num) {
    $('#milesToGoNum').text(Math.floor(num));
  }
  function setMilesToNext(num) {
    $('#milesToNextNum').text(Math.floor(num));
  }
  function setCoolPoints(num) {
    $('#coolPointsNum').text(Math.floor(num));
  }
  function setMoney(num) {
    $('#moneyLeftNum').text(Math.floor(num * 100)/100);
  }
  function setGas(num) {
    $('#gasRemainingNum').text(Math.floor(num*10)/10);
  }
  function getEvent() {
    return game.eventsManger.getRandomEvent();
  }

  function countdownMilage(){
    var milesInTurn = 0;
    setRollingImage();
    leftCity();
    $('#goWest').hide();
    var timeInterval = setInterval(function(){
      var nextCityDist = cities[game.currentCityIndex + 1].distanceRemaining;
      distanceRemaining--;
      milesInTurn++;
      setMilesToGo(distanceRemaining);
      setMilesToNext(distanceRemaining - nextCityDist + 1);
      setMilesTravelled(TOTALMILES - distanceRemaining);
      game.getCar().travel(1);
      updateStats();

      if (distanceRemaining < nextCityDist){ //arrived at city
        $('#goWest').show();
        atCity();
        clearInterval(timeInterval)
        goWest();
      }
      if (milesInTurn > 49){
        $('#goWest').show();
        clearInterval(timeInterval);
        stopScrollingBackground();
      }
    }, 50)
    var event = game.eventsManager.getRandomEvent();
    game.updateStatesEvent(event);
    game.starvePeople();
  }

  function initGame(){
    // splash screen
    $('#gameplay').hide();
    $('#characterSelection').hide();

    $('#intro').on('click', function () {
      $('#intro').hide();
      $('#characterSelection').show();
    })

    $('#onTheRoad').hide();
    $('#nextCity').text(cities[game.currentCityIndex+1].name);
    setCityImage(cities[game.currentCityIndex])
    setMilesToGo(TOTALMILES);
    setMilesToNext(57);
    setMilesTravelled(0);
  }

  function atCity() {
    $('#buyGas').show();
    $('#getFood').show();
    $('#onTheRoad').hide();
    $('#currentCity').show();
    var nextCityDist = cities[game.currentCityIndex + 2].distanceRemaining;
    setMilesToNext(distanceRemaining - nextCityDist + 1);
    $('#nextCity').text(cities[game.currentCityIndex+2].name);
    setTimeout(function(){
      setCityImage(cities[game.currentCityIndex])
    }, 1000)
  }
  function leftCity() {
    $('#buyGas').hide();
    $('#getFood').hide();
    $('#currentCity').hide();
    $('#onTheRoad').show();
    $('#milesToNext').show();
  }

  function updateStats() {
    var mileage = game.getCar().mileage;
    var cityName = game.currentCity.name;
    setCityName(cityName);
    setCoolPoints(game.cool);
    setMoney(game.wealth);
    setGas(game.getCar().currentTank);
  }

  function goWest() {
    var event = game.goWest();
    updateStats();
    stopScrollingBackground();
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

  updateStats();
  $('#cityImage').hide();
  $('#restaurantOptions').hide();
  $('#buyingGasInfo').hide();
  // $('#gasOptionsContainer').hide();

  //buttons
  $('#goWest').on('click', countdownMilage);
  $('#getFood').on('click', getFood);
  $('#buyGas').on('click', buyGas);
  $('#forgetIt').on('click', forgetIt);
  initGame();

  function getFood(){
    $('#actions').hide();
    $('#restaurantOptions').show();
    game.restaurants.getRandomRestaurants().forEach(function(restaurant){
      $("<div />")
        .html(restaurant.name)
        .addClass('action')
        .appendTo("#restaurantOptionsContainer")
        .on('click', function(){
          game.selectRestaurant(restaurant);
          setMoney(game.wealth);
          setCoolPoints(game.cool);
          $('#restaurantOptionsContainer').empty();
          $('#restaurantOptions').hide();
          $('#actions').show();
        });
    })
  }
  function buyGas() {
    $('#actions').hide();
    var gasStats = game.getGasStats();
    var costPerGallonRounded = Math.round(gasStats.costPerGallon * 100) / 100;
    var amountToFillRounded = Math.round(gasStats.amountToFill * 100) / 100;
    var totalCostRounded = Math.round(gasStats.totalCost * 100) / 100;
    $('#buyingGasInfo').show();
    $('#gasPrice').text(costPerGallonRounded);
    $('#gasTotalGallons').text(amountToFillRounded);
    $('#gasTotalCost').text(totalCostRounded);
    $('#payNow').on('click', function(){
      game.refuelCar(gasStats.totalCost);
      $('#buyingGasInfo').hide();
      $('#actions').show();
      $('gasOptionsContainer').empty();
      $('#moneyLeftNum').text(Math.round(game.wealth * 100) / 100);
    });
  }
  function forgetIt() {
    $('#buyingGasInfo').hide();
    $('#actions').show();
  }

  var scrollBackground;

  function stopScrollingBackground(){
    clearInterval(scrollBackground);
  }

  function setupCharacterScreen(){
    game.characterManager.characters.forEach(function(character){
      $("<tr/>")
      .append(`
        <td>${character.name}</td>
        <td>${character.hometown}</td>
        <td>${character.wealth}</td>
        <td>${character.cool}</td>
        <td>${character.hungerRate}</td>
      `)
      .addClass('action')
      .addClass('characterSelectionIndividual')
      .appendTo("#characterSelectionContainer")
      .on('click', function(){
        if(!selectedCharacters.includes(character)){
          selectedCharacters.push(character);
          $(this).addClass('characterSelected')
        }else{
          selectedCharacters = selectedCharacters.filter(e => e !== character)
          $(this).removeClass('characterSelected')
        }
      });
    });
  };

  $('#acceptCharacters').on('click', function(){
    game.setUpPeople(selectedCharacters)
    $('#characterSelection').hide();
    $('#gameplay').show();
  })

  $('#whateverCharacters').on('click', function(){
    game.setUpPeople([
      new Person('Chet', 'Licoln', -10, 220, 28, 4),
			new Person('Chad', 'Fort Worth', 10, 100, 18, 5),
			new Person('Jess', 'Davenport', 100, 50, 10, 6),
			new Person('Jo', 'Omaha', 10, 50, 5, 7)
    ])
    $('#characterSelection').hide();
    $('#gameplay').show();
  })

  setupCharacterScreen();

  function startScrollingBackground(){
    scrollBackground = setInterval(function(){
      imageInterval+=1.6;
      $('#backgroundImage').css('background-position', imageInterval + 'px 0');
    }, 20);
  }


});
