class Person {
	constructor(name, hometown, cool, wealth, hungerRate, id) {
		this.id = id
		this.name = name
		this.hometown = hometown
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
			if (!this.isDead) {
				this.die()
			}

			$('#passenger' + this.id + ' .hungerBar').css('width', '100%');
		} else {
			$('#passenger' + this.id + ' .hungerBar').css('width', "" + this.hunger + '%');
		}
	}

  die() {
    this.isDead = true

		$('#passenger' + this.id + ' .passengerName').addClass('deadPassenger').removeClass('passenger')
		notification("" + this.name + " has died.")
  }

	feed() {
		let oldHunger = this.hunger
		this.hunger = 0
		$('#passenger' + this.id + ' .hungerBar').css('width', "0%");
		return oldHunger
	}
}

class CharacterManager {
	constructor(){
		this.characters = [
			new Person('Dave', 'Omaha', 100, 150, 20, 0),
			new Person('Rob', 'Fort Dodge', 0, 250, 40, 1),
			new Person('Sarah', 'Rochester', 20, 80, 15, 2),
			new Person('Nicole', 'Omaha', 100, 50, 20, 3),
			new Person('Chet', 'Licoln', -10, 220, 28, 4),
			new Person('Chad', 'Fort Worth', 10, 100, 18, 5),
			new Person('Jess', 'Davenport', 100, 50, 10, 6),
			new Person('Peyton', 'Omaha', 10, 50, 5, 7)
		]
	}
}
