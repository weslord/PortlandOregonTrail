class Game {
	constructor() {
    this.TOTALMILES = 1893;
		this.car = new Car()
		this.cool = 100
		this.wealth = 1000
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

	goWest() {
    if (this.currentCityIndex < cities.length) {
      this.currentCityIndex++;
      this.currentCity = cities[this.currentCityIndex];
      this.car.mileage += this.distanceFromLastCity();
    } 
   
		this.car.gas -= 1 //TODO: Calculate gas to next city
		let event = this.eventsManager.getRandomEvent()
    this.changeCool(event.cool);
    this.changeMoney(event.wealth);
    return this.car.gas; //particular reason? 
	}
}
