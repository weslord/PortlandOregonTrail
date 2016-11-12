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
		  new Event("Flat tire. Bummer, dude.", -100, 0),
		  new Event("Cash advance from parent's credit card.", 200, -15),
		  new Event("Find vinyl record in thrift store while passing by.", -15, 10),
		  new Event("Ironically stop at historic monument.", 0, 5),
		  new Event("Unironically stop at historic monument.", 0, -15),
		  new Event("Skinny jeans are too tight. Must undergo surgery to remove them.", -250, 15),
		  new Event("Never heard of The Dandy Warhols.", 0, -15),
		  new Event("Thick frame glasses are fake.", 0, -15),
		  // new Event("Phone broke. You died of boredom.", 0, 0),
		  new Event("Worked a shift at roadside organic farm..", 100, 10)
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
