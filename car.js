class Car {
	constructor() {
		this.currentTank = 20
		this.MAX_TANK_CAPACITY = 20
		this.MILES_PER_GALLON = 25
	}

	travel(miles) {
		this.currentTank -= miles / this.MILES_PER_GALLON 
	}

	requiredFuel() {
		return this.MAX_TANK_CAPACITY - this.currentTank
	}

	refuel() {
		this.currentTank = this.MAX_TANK_CAPACITY
	}
}