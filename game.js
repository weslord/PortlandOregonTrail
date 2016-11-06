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
		this.wealth -= costOfGas;
    this.car.refuel();
	}
}
