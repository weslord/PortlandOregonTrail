var events = [
	{
		"description": "Flat tire, too bad man.",
		"cost": -100,
		"cool": 100 
	},
	{
		"description": "Nobody liked your selfie on Facebook.",
		"cost": 0,
		"cool": -25
	},
	{
		"description": "People have discovered you like Nickleback.",
		"cost": 0,
		"cool": -100
	},
	{
		"description": "Trust fund invested in Silicon Valley app failure.",
		"cost": -150,
		"cool": 25
	},
	{
		"description": "Bought an iPhone instead of an Android. No money for groceries.",
		"cost": -1000,
		"cool": 1000
	},
	{
		"description": "Used parent's credit card to pay off maintenance fees.",
		"cost": 200,
		"cool": -200
	},
	{
		"description": "Your buds found out you participated in the Hipster Olympics in 2006",
		"cost": 0,
		"cool": 100
	},
	{
		"description": "Find vinyl record in thrift store while passing by.",
		"cost": 100,
		"cool": 100
	},
	{
		"description": "Ironically stop at historic monument, but you don't know why.",
		"cost": 0,
		"cool": 100
	},
	{
		"description": "You stop to see a statue of Britney Spears. You spot someone you know, and you hide.",
		"cost": 0,
		"cool": -50
	}, 
	{
		"description": "Need to go to hospital because jeans are too tight.",
		"cost": -2000,
		"cool": 100
	},
	{
		"description": "Purchased a velocipede.",
		"cost": -100,
		"cool": 50
	},
	{
		"description": "Stopped for coffee. Took out your typewriter.",
		"cost": 0,
		"cool": 25
	},
	{
		"description": "Became friends with a cop.",
		"cost": 0,
		"cool": 20
	},
	{
		"description": "Phone broke. You died of boredom",
		"cost": 0,
		"cool": 0
	},
	{
		"description": "Stopped by to help a farmer cultivate his organic tomatoes.",
		"cost": 100,
		"cool": 100
	},
	{
		"description": "Ate too much sashimi. Got mercury poisoning.",
		"cost": 200,
		"cool": 50
	}
];

var getRandomEvent = function() {
	let randomNumber = Math.random() * 100;
	return events[randomNumber % events.count]
}

module.exports.events = events;
module.exports.getRandomEvent = getRandomEvent;