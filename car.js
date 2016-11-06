class Car {
	constructor() {
    this.mileage = 0;
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

  generateCostPerGallon() {
		let randomNumber = Math.random();
		return 2 + randomNumber;
  }
  // mileage() {
  //   return this.mileage;
  // }
  // currentGas() {
  //   return this.currentGas;
  // }
}
