class Person {
	constructor(name, cool, wealth, hungerRate, id) {
		this.id = id
		this.name = name
		this.cool = cool
		this.wealth = wealth
		this.hungerRate = hungerRate

		this.hunger = 0
    this.isDead = false
    // Math.floor(Math.random() * 20) + 5
	}

	becomeHungerier() {
		let randomHunger = Math.random() * 10 - 5
		this.hunger += this.hungerRate + randomHunger

		if (this.hunger >= 100) {
			this.die()
			$('#passenger' + this.id + ' .hungerBar').css('width', '100%');
		} else {
			$('#passenger' + this.id + ' .hungerBar').css('width', "" + this.hunger + '%');
		}
	}

  die() {
    this.isDead = true

		$('#passenger' + this.id + ' .passengerName').addClass('deadPassenger').removeClass('passenger')
  }

	feed() {
		let oldHunger = this.hunger
		this.hunger = 0
		return oldHunger
	}
}

class CharacterManager {
	constructor(){
		this.characters = [
			new Person('Dave', 100, 50, 20, 0),
			new Person('Rob', 100, 50, 20, 0),
			new Person('Sarah', 100, 50, 20, 0),
			new Person('Nicole', 100, 50, 20, 0),
			new Person('Chet', 100, 50, 20, 0),
			new Person('Chad', 100, 50, 20, 0),
			new Person('Jess', 100, 50, 20, 0),
			new Person('Jo', 100, 50, 20, 0)
		]
	}
}
