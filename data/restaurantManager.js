class Restaurant {
	constructor(name, type, description, costPerPointOfHunger) {
		this.name = name
		this.type = type
		this.description = description
		this.costPerPointOfHunger = costPerPointOfHunger
	}
}


class RestaurantManager {
	constructor() {
		this.restaurants = [
			new Restaurant("Joe's Diner", "family", "Food for the family.", 5),
			new Restaurant("McDonalds", "fast-food", "Ronald's home.", 3),
			new Restaurant("Burger King", "fast-food", "BK yo belly.", 3),
			new Restaurant("Old Town Bakery", "family", "Old fashioned sweets.", 5),
			new Restaurant("Monumental Fried Chicken", "fast-food", "Bwuk bwuk", 3),
			new Restaurant("Cheap n' Chillies", "Vegan", "Veganism", 10),
			new Restaurant("Rabbit Food Source", "Vegan", "Your favorite garden food.", 10),
			new Restaurant("Willy Billies", "Food-Truck", "Willy your Billy.", 13),
			new Restaurant("Chilli Billies", "Food-Truck", "Chilli your Dilly.", 14),
			new Restaurant("Dilli Billies", "Food-Truck", "Dilly your Zilli.", 15),
			new Restaurant("Vegan Cookie Doughhouse", "Vegan", "Gluten free too.", 10),
		]
	}

	getRandomRestaurants() {
		let randomNumber1 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber2 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber3 = Math.floor(Math.random() * this.restaurants.length)

		return [this.restaurants[randomNumber1], this.restaurants[randomNumber2], this.restaurants[randomNumber3]]
	}
}