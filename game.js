class Game {
	constructor() {
		this.car = new Car()
		this.people = [
			new Person("Bill"),
			new Person("Bob"),
			new Person("Jack"),
			new Person("Jill")
		]
		this.events
	}

	next() {
		this.car.gas -= 10
		return this.car.gas
	}
}