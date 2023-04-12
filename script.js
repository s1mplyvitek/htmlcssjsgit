fetch("./price.json")
	.then((res) => res.json())
	.then((res) => {
		expenseIngr = res;
		return fetch("./menu.json");
	})
	.then((res) => res.json())
	.then((res) => {
		res.forEach(function (item) {
			item.expense = item.ingridients.reduce(function (accum, item) {
				return accum += expenseIngr[item];
			}, 0)
		})
		
	})	
	.catch((error) => console.log(error));
	

let buuza = {
	name: 'buuza',
	price: 70,
	expense: 0,
	ingridients: ['meat', 'water', 'solt', 'onion',],
};

let blackSoup = {
	name: 'blackSoup',
	price: 100,
	expense: 0,
	ingridients: ['meat', 'water', 'solt',],
};

let brtuch = {
	name: 'brtuch',
	price: 150,
	expense: 0,
	ingridients: ['salad', 'bread', 'sauce', 'meat', 'cheese',],
};

let classicSalad = {
	name: 'classicSalad',
	price: 60,
	expense: 0,
	ingridients: ['salad', 'onion', 'solt', 'cucmber',],
}

let dish;
let expenseIngr;

let veganBool = {
	meat: false,
	water: true,
	solt: true,
	onion: true,
	salad: true,
	bread: true,
	sauce: true,
	cheese: true,
	cucmber: true,
};



// //reduce





// //map
// let changeDish = dish.map(function (item) {
// 	let change = {
// 		onlyname: item.name,
// 		onlyprice: item.price
// 	}
// 	return change;
// });

// console.log(`${JSON.stringify(changeDish)}`);



// //some
// let veganDish = dish.some(function (item, index, arr) {
// 	veganOnly = !item.ingridients.some(function (item, index, arr) {
// 		return veganBool[item] == !true;
// 	});
// 	return veganOnly;
// });

// console.log(`Есть вегетарианское блюдо ${veganDish}`);


// //every
// let allVeganDish = dish.every(function (item, index, arr) {
// 	vega = item.ingridients.every(function (item, index, arr) {
// 		return veganBool[item];
// 	});
// 	return vega;
// });

// console.log(`Все блюда вегетарианские ${allVeganDish}`);



// //filter
// let filtDish = dish.filter(function (item, index, arr) {
// 	vegas = item.ingridients.every(function (item, index, arr) {
// 		return veganBool[item];
// 	})
// 	return vegas;
// });

// console.log(`${JSON.stringify(filtDish)}`);
