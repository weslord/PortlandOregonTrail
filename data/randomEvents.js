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
		  new Event("Flat tire, too bad man.", -100, 0),
		  new Event("Nobody liked your selfie on Facebook.", 0, -25),
		  new Event("A Nickelback song was found on your playlist.", 0, -100),
		  new Event("Trust fund invested in Silicon Valley app failure.", -150, 25),
		  new Event("Bought an iPhone instead of an Android. No money for groceries.", -1000, 100),
		  new Event("Used parent's credit card to pay off maintenance fees.", 200, -25),
		  new Event("Your buds found out you participated in the Hipster Olympics in 2006.", 0, 100),
		  new Event("Find vinyl record in thrift store while passing by.", 100, 25),
		  new Event("Ironically stops at historic monument, don't know why.", 0, 25),
		  new Event("You stop to see a statue of Britney Spears. You spot someone you know, and you hide.", 0, -50),
		  new Event("Skinny jeans are too tight. Must undergo surgery to remove them.", -2000, 100),
		  new Event("Purchased a velocipede.", -100, 50),
		  new Event("Stopped for coffee. Took out the typewriter.", -10, 25),
		  new Event("Became friends with a cop.", 0, 20),
		  // new Event("Phone broke. You died of boredom.", 0, 0),
		  new Event("Stopped by to help a farmer cultivate his organic tomatoes.", 100, 100),
		  new Event("Ate too much sashimi. Got mercury poisoning.", 200, 50)
		]
	}

	getRandomEvent() {
    let ran = Math.random();
    // console.log(ran);
    if (ran > 0.3) { return; }
      let randomNumber = Math.floor(Math.random() * this.events.length);
      return this.events[randomNumber]
	}
  getNickelback() {
		  return new Event("A Nickelback song was found on your playlist.", 0, -100);
  }
}
