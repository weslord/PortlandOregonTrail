class Game {
	constructor() {
    this.TOTALMILES = 1893;
		this.characterManager = new CharacterManager()
    this.car = new Car()
    this.restaurants = new RestaurantManager()
    this.people = []

    this.cool = 0
    this.wealth = 0
    this.currentCityIndex = 0;
    this.currentCity = cities[this.currentCityIndex];
    this.eventsManager = new EventsManager()
    this.restaurantManager = new RestaurantManager()
    this.atCity = true;
	}

	setUpPeople(people){
		this.people = people;
		for (var person in this.people) {
			this.cool += this.people[person].cool
			this.wealth += this.people[person].wealth
			var peep = this.people[person];

			$("<div />")
				.append(`
					<span class='passengerName'>${peep.name}</span>
					<div class="hungerContainer"><div class="hungerBar"></div></div>
				`)
				.addClass('passenger')
				.attr('id', `passenger${peep.id}`)
				.appendTo('#passengers')
		}
	}
  
  changeCool(num) {
    this.cool += num;
  }

  changeMoney(num) {
    this.wealth += num;
  }

  currentCity() {
    return this.currentCity;
  }

  currentCityIndex() {
    return this.currentCityIndex;
  }

  getCar() {
    return this.car;
  }

  distanceFromLastCity() {
    return cities[this.currentCityIndex - 1].distanceRemaining - this.currentCity.distanceRemaining;
  }

  updateStatesEvent(event) {
    if (event != undefined) {
      if (event.description.includes('Nickelback')) {
        console.log("NICKELBACK");
        var stopItPlease = function() {
          nickelback.pause();
          nickelback.currentTime = 0;
        }
        setTimeout(stopItPlease, 12000);
        var nickelback = new Audio('audio/nickelback.mp3');
        nickelback.play();
      }
      this.changeCool(event.cool);
      this.changeMoney(event.cost);
      notification(event.description, event.cool, event.cost);
    }
  }

	goWest() {
    if (this.currentCityIndex < cities.length) {
      this.currentCityIndex++;
      this.currentCity = cities[this.currentCityIndex];
      this.car.mileage += this.distanceFromLastCity();
    }
		// var event = this.eventsManager.getRandomEvent();
    // this.updateStatesEvent(event);
    return event;
  }
  getGasStats() {
    var costPerGallon = this.car.generateCostPerGallon();
    var requiredFuel = this.car.MAX_TANK_CAPACITY - this.car.currentTank;
    var totalCost = requiredFuel * costPerGallon;
    console.log('requiredFuel ' + requiredFuel);
    console.log('total cost ' + totalCost);

    return {
      costPerGallon: costPerGallon,
      amountToFill: requiredFuel,
      totalCost: totalCost
    }

  }

	refuelCar(totalCost) {
		// let requiredFuel = this.car.requiredFuel();
		// let randomNumber = Math.random();
		// let costPerGallon = 2 + randomNumber;
		// let costOfGas = requiredFuel * costPerGallon;
    if (totalCost <= this.wealth) {
      this.wealth -= totalCost;
      this.car.refuel();
    } else {
      notification("Not enough money for gas!");
    }
	}

  starvePeople() {
    let people = this.people

    for (var i = 0; i < people.length; i++) {
      let person = people[i]
      person.becomeHungerier()
    }
  }

  feedPeople(restaurant) {
		var canEat = true;
    for (var person in this.people) {
// <<<<<<< HEAD
//       this.people[person].feed()
//     }
//     this.wealth += restaurant.price
// 		
// =======
			var that = this;
			this.people[person].allergies.forEach(function(allergy){
				if  (allergy === "Gluten" && restaurant.type === 'Gluten'){
					notification(that.people[person].name + " is allergic to Gluten, you can't eat here")
					canEat = false;
				}
				if ((allergy === 'Vegan' || allergy === ' Vegan') && restaurant.type === 'Vegan'){
					notification(that.people[person].name + " is a Vegan, you can't eat here")
					canEat = false;
				}
			})
    }

		if (canEat){
			console.log('here')
			for (var person in this.people) {
				this.people[person].feed();
				this.wealth += restaurant.price
				// setMoney(game.wealth);
				setCoolPoints(game.cool);
				selectRestaurant(restaurant);

				$('#restaurantOptionsContainer').empty();
				$('#restaurantOptions').hide();
				$('#actions').show();

			}
		}
  }

	selectRestaurant(restaurant) {
		this.changeMoney(restaurant.price);
		this.changeCool(restaurant.cool);
	}
  isGameOver() {
    var everyoneDead = true;
    for (var i = 0; i < 4; i++) {
      if (this.people[i] && !this.people[i].isDead) {
        everyoneDead = false;
      }
    }
    // this.people[0].isDead && this.people[1].isDead && this.people[2].isDead &&  this.people[3].isDead;
    console.log('everyoneDead' + everyoneDead);
    var coolDead = this.cool <= -100;
    var outOfGas = this.car.currentTank <= 0;

    return {
      everyoneDead: everyoneDead, 
      coolDead: coolDead, 
      outOfGas: outOfGas
    }
    // return everyoneDead || this.cool <= -100 || this.people.length <= 0 || this.car.currentTank <= 0;
  }
}
