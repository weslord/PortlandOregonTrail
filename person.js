class Person {
	constructor(name) {
		this.name = name
		this.hunger = 0

		this.hungerRate = Math.floor(Math.random() * 20) + 5
	}

	becomeHungerier() {
		let randomHunger = Math.random() * 10 - 5
		this.hunger += this.hungerRate + randomHunger
	}

	feed() {
		let oldHunger = this.hunger
		this.hunger = 0
		return oldHunger
	}
}