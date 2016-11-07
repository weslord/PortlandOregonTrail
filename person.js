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
			new Person('Elliot', 23, ['None'], 100, 150, 20, 0),
      new Person('Chase', 25, ['Gluten', ' Vegan'], 0, 250, 40, 1),
      new Person('Zarah', 22, ['None'], 20, 80, 15, 2),
      new Person('Nicole', 19, [" Doesn't do McDonalds"], 100, 50, 20, 3),
      new Person('Chad', 30,  ['Pescatarian'], -90, 220, 5, 4),
      new Person('Huntyr', 16, ['Vegan'], 10, 100, 18, 5),
      new Person('Jess', 22, ['Gluten'], 100, 50, 10, 6),
      new Person('Peyton', 21, ['Vegan', " Doesn't do Starbucks"], 10, 50, 5, 7)
		]
	}
}
