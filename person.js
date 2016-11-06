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
		notification("" + this.name + " has died.")
  }

	feed() {
		let oldHunger = this.hunger
		this.hunger = 0
		return oldHunger
	}
}