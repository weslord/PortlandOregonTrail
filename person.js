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
			this.isDead = true
			// 
			// $('#passenger' + this.id
			$('#passenger' + this.id + ' .hungerBar').css('width', '100%');
		} else {
			$('#passenger' + this.id + ' .hungerBar').css('width', "" + this.hunger + '%');
		}
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
			new Person('Dave'),
			new Person('Rob'),
			new Person('Sarah'),
			new Person('Nicole'),
			new Person('Chet'),
			new Person('Chad'),
			new Person('Jess'),
			new Person('Jo')
		]
	}
}
