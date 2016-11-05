class Event {
	constructor(description, cost, cool) {
		this.description = description
		this.cost = cost
		this.cool = cool
	}
}

class EventsManager {
	constructor() {
		this.events = [
		  new Event("Flat tire, too bad man.", -100, 100),
		  new Event("Nobody liked your selfie on Facebook.", 0, -25),
		  new Event("People have discovered you like Nickleback.", 0, -100),
		  new Event("Trust fund invested in Silicon Valley app failure.", -150, 25),
		  new Event("Bought an iPhone instead of an Android. No money for groceries.", -1000, 1000),
		  new Event("Used parent's credit card to pay off maintenance fees.", 200, -200),
		  new Event("Your buds found out you participated in the Hipster Olympics in 2006.", 0, 100),
		  new Event("Find vinyl record in thrift store while passing by.", 100, 100),
		  new Event("Ironically stops at historic monument, don't know why.", 0, 100),
		  new Event("You stop to see a statue of Britney Spears. You spot someone you know, and you hide.", 0, -50),
		  new Event("Need to go to hospital because jeans are too tight.", -2000, 100),
		  new Event("Purchased a velocipede.", -100, 50),
		  new Event("Stopped for coffee. Took out the typewriter.", 0, 25),
		  new Event("Became friends with a cop.", 0, 20),
		  new Event("Phone broke. You died of boredom.", 0, 0),
		  new Event("Stopped by to help a farmer cultivate his organic tomatoes.", 100, 100),
		  new Event("Ate too much sashimi. Got mercury poisoning.", 200, 50)
		]
	}

	getRandomEvent() {
		let randomNumber = Math.floor(Math.random() * this.events.length);
		return this.events[randomNumber]
	}
}