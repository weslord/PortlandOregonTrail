class Restaurant {
	constructor(name, type) {
		this.name = name
		this.type = type
	}
}


class RestaurantManager {
	constructor() {
		this.restaurants = [
			new Restaurant("Joe's Diner", "family"),
			new Restaurant("McDonalds", "fast-food"),
			new Restaurant("Burger King", "fast-food"),
			new Restaurant("Old Town Bakery", "family"),
			new Restaurant("Monumental Fried Chicken", "fast-food"),
			new Restaurant("Cheap and Chillies", "Vegan"),
			new Restaurant("Rabbit Food Source", "Vegan"),
			new Restaurant("Willy Billies", "Food-Truck"),
			new Restaurant("Chilli Billies", "Food-Truck"),
			new Restaurant("Dilli Billies", "Food-Truck"),
			new Restaurant("Vegan Cookie Doughhouse", "Vegan"),
		]
	}

	getRandomRestaurants() {
		let randomNumber1 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber2 = Math.floor(Math.random() * this.restaurants.length)
		let randomNumber3 = Math.floor(Math.random() * this.restaurants.length)

		return [this.restaurants[randomNumber1], this.restaurants[randomNumber2], this.restaurants[randomNumber3]]
	}
}