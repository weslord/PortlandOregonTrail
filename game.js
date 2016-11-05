class Game {
	constructor() {
		this.car = new Car()
		this.cool = 100
		this.wealth = 1000
		this.people = [
			new Person("Bill"),
			new Person("Bob"),
			new Person("Jack"),
			new Person("Jill")
		]
		this.eventsManager = new EventsManager()
	}
  changeCool(num) {
    this.cool += num;
  }

  changeMoney(num) {
    this.wealth += num;
  }

	goWest() {
		this.car.gas -= 10 //TODO: Calculate gas to next city
		let event = this.eventsManager.getRandomEvent()
    changeCool(event.cool);
    changeMoney(event.wealth);
    return this.car.gas; //particular reason? 
	}
}
