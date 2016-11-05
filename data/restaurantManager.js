class Restaurant {
	constructor(name, type, description) {
		this.name = name
		this.type = type
		this.description = description
	}
}


class RestaurantManager {
	constructor() {
		this.restaurants = [
			new Restaurant("Joe's Diner", "family", "Food for the family."),
			new Restaurant("McDonalds", "fast-food", "Ronald's home."),
			new Restaurant("Burger King", "fast-food", "BK yo belly."),
			new Restaurant("Old Town Bakery", "family", "Old fashioned sweets."),
			new Restaurant("Monumental Fried Chicken", "fast-food", "Bwuk bwuk"),
			new Restaurant("Cheap n' Chillies", "Vegan", "Veganism"),
			new Restaurant("Rabbit Food Source", "Vegan", "Your favorite garden food."),
			new Restaurant("Willy Billies", "Food-Truck", "Willy your Billy."),
			new Restaurant("Chilli Billies", "Food-Truck", "Chilli your Dilly."),
			new Restaurant("Dilli Billies", "Food-Trucq1`																																															k", "Dilly your Zilli."),
			new Restaurant("Vegan Cookie Doughhouse", "Vegan", "Gluten free too."),
		]
	}

	getRandomRestaurants() {
		let randomNumber1 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber2 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber3 = Math.floor(Math.random() * this.restaurants.length)

		return [this.restaurants[randomNumber1], this.restaurants[randomNumber2], this.restaurants[randomNumber3]]
	}
}