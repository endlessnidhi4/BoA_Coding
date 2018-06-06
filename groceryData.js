
	const groceryData = [
	{
		category: "fruit",
		item: "apples",
		type: "Honey Crisp",
		brand: "Little cuties",
		qty: 10
	},
	{
		category: "beverage",
		item: "milk",
		type: "2%",
		brand: "generic",
		qty: "1 gallon"
	},
	{
		category: "pasta",
		item: "Pasta",
		type: "Penne",
		brand: "Barilla",
		qty: 3
	},
	{
		category: "dessert",
		item: "Gelatin",
		type: "Green",
		brand: "Jello",
		qty: 3
	},
	{
		category: "dairy",
		item: "Yogurt",
		type: "Assorted flavors",
		brand: "Chobani",
		qty: 12
	},
	{
		category: "pasta",
		item: "Pasta",
		type: "Linguini",
		brand: "Barilla",
		qty: 3
	},
	{
		category: "beverage",
		item: "Apple juice",
		type: "regular",
		brand: "Happy Farms",
		qty: 2
	},
	{
		category: "beverage",
		item: "Vodka",
		type: "Tangerine",
		brand: "Grey Goose",
		qty: 1
	}
];
	//The map() method is used to create a new array with the results of calling a function for every array element.

	document.getElementById("grocList").innerHTML = `
	<div class="mainContainer"> ${groceryData.map(function(groceryItem){
		return `
			<div class="container">
				<div class="grCategory"> ${groceryItem.category} </div>
				<div class="grType"> ${groceryItem.type} </div>
				<h2 class="grItem"> ${groceryItem.item} </h2>
				<hr>
				<div class="grBrand"> ${groceryItem.brand} </div>
				<div class="grQty"> Qty / ${groceryItem.qty} </div>
			</div>
		`
		
	}).join('')}</div>
	
	`;
