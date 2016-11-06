class Game {
	constructor() {
		this.car = new Car()
		this.cool = 100.0
		this.wealth = 1000.0
		this.people = [
			new Person("Bill"),
			new Person("Bob"),
			new Person("Jack"),
			new Person("Jill")
		]
		this.eventsManager = new EventsManager()
	}

	next() {
		this.car.currentTank -= 10
		let event = this.eventsManager.getRandomEvent()
		this.cool += event.cool
		this.wealth += event.cost
		return this.car.gas
	}

	refuelCar() {
		let requiredFuel = this.car.requiredFuel()
		let randomNumber = Math.random()
		let costPerGallon = 2 + randomNumber
		let costOfGas = requiredFuel * costPerGallon
		this.wealth -= costOfGas
		this.car.refuel()
	}
}