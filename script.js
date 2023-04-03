let buuza = {
	name: 'buuza',
	price: 70,
	expense: 0,
	ingridients: ['meat', 'water', 'solt', 'onion',],
	supplySystem: 'nonVegan',
};

let blackSoup = {
	name: 'blackSoup',
	price: 100,
	expense: 0,
	ingridients: ['meat', 'water', 'solt',],
	supplySystem: 'nonVegan',
};

let brtuch = {
	name: 'brtuch',
	price: 150,
	expense: 0,
	ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
	supplySystem: 'nonVegan',
};

let classicSalad = {
	name: 'classicSalad',
	price: 60,
	expense: 0,
	ingridients: ['salad', 'onion', 'solt', 'cucmber'],
	supplySystem: 'vegan',
}

let dish = [
	buuza,
	blackSoup,
	brtuch,
	classicSalad,
];

let expenseIngr = {
	meat: 30,
	water: 5,
	solt: 5,
	onion: 10,
	salad: 15,
	bread: 10,
	sauce: 15,
	cheese: 10,
	cucmber: 12,
};



//reduce
dish.forEach(function (item) {
	item.expense = item.ingridients.reduce(function (accum, item) {
		return accum += expenseIngr[item];
	}, 0);
});

dish.forEach(function (item) {
	console.log(`блюдо: ${item.name} - себестоимость: ${item.expense}\n
	ПРОФИТ ${item.price - item.expense}`);
});



//map
let changeDish = dish.map(function (item) {
	let change = {
		onlyname: item.name,
		onlyprice: item.price
	}
	return change;
});

console.log(`${JSON.stringify(changeDish)}`);



//some
let veganDish = dish.some(function (item) {
	return item.supplySystem == 'vegan';
});

console.log(`Есть вегетарианское блюдо ${veganDish}`);


//every
let allVeganDish = dish.every(function (item) {
	return item.supplySystem == 'vegan';
});

console.log(`Все блюда вегетарианские ${allVeganDish}`);



//filter
let filtDish = dish.filter(function (item) {
	return item.supplySystem == 'vegan';
});
console.log(`${JSON.stringify(filtDish)}`);
