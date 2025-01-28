// this is a list of camping gear, where each item has a name and a weight.
const campingGear = [
	{
		name: "Tent",
		price: 230,
	},
	{
		name: "Sleeping bag",
		price: 150,
	},
	{
		name: "Sleeping pad",
		price: 90,
	},
	{
		name: "Stove",
		price: 70,
	}
];

// this function finds the average price of all the camping gear.
function averagePrice() {
	let totalPrice = 0;
	
	// here we are looping through each item in campingGear and adding its price to totalPrice.
	for (const item of campingGear) {
		totalPrice += item.price;
	}

	// we divide totalPrice by the length of the campingGear array to get the average price.
	return totalPrice / campingGear.length;
}

// this statement runs averagePrice and logs the result.
console.log(averagePrice());

// challenge: add a "weight" property to each item in campingGear, and write a function that returns the total weight of all the camping gear.
// hint: look at how the averagePrice function works. you can copy most of what it's doing and modify it to calculate the total weight.
function totalWeight() {
	// your code here
}

// this statement runs totalWeight and logs the result.
console.log(totalWeight());