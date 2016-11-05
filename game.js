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

	next() {
		this.car.gas -= 10
		let event = this.eventsManager.getRandomEvent()
		this.cool += event.cool
		this.wealth += event.cost
		return this.car.gas
	}
}