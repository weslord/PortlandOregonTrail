class Game {
	constructor() {
    this.TOTALMILES = 1893;
		this.car = new Car()
		this.cool = 100.0
		this.wealth = 1000.0
		this.people = [
			new Person("Bill"),
			new Person("Bob"),
			new Person("Jack"),
			new Person("Jill")
		]
    this.currentCityIndex = 0;
    this.currentCity = cities[this.currentCityIndex];
		this.eventsManager = new EventsManager()
    this.atCity = true;
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
    this.car.travel(this.distanceFromLastCity());
		// var event = this.eventsManager.getRandomEvent();
    // this.updateStatesEvent(event);
    return event;
  }

	refuelCar() {
		let requiredFuel = this.car.requiredFuel();
		let randomNumber = Math.random();
		let costPerGallon = 2 + randomNumber;
		let costOfGas = requiredFuel * costPerGallon;
    if (costOfGas <= this.wealth) {
      this.wealth -= costOfGas;
      this.car.refuel();
    } else {
      notification("Not enough money for gas!");
    }
	}
}
