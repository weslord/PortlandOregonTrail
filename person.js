class Person {
	constructor(name, hometown, allergies, cool, wealth, hungerRate, id) {
		this.id = id
		this.name = name
		this.hometown = hometown
		this.allergies = allergies
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

		$('#passenger' + this.id).addClass('deadPassenger').removeClass('passenger')
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
		  new Person('Wyntir', 23, ['No Big Chains'], 80, 10, 15, 0),
          new Person('Chase', 25, ['Gluten', ' Vegan'], 35, 1250, 25, 1),
          new Person('Zarah', 22, ['None'], 20, 150, 15, 2),
          new Person('Nicole', 19, ["Pescatarian"], 50, 250, 10, 3),
          new Person('Alan', 43,  ['None'], -90, 2500, 5, 4),
          new Person('Huntyr', 16, ['None'], 10, 50, 12, 5),
          new Person('Jess', 22, ['Bee Stings'], 50, 50, 10, 6),
          new Person('Pixel', 21, ['Buttons'], 100, 5, 5, 7)
		]
	}
}
