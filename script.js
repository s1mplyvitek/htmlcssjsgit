fetch("./price.json")
	.then((res) => res.json())
	.then((res) => {
		expenseIngr = res;
		return fetch("./menu.json");
	})
	.then((res) => res.json())
	.then((res) => {
		dish = res


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
		let veganDish = dish.some(function (item, index, arr) {
			veganOnly = !item.ingridients.some(function (item, index, arr) {
				return !veganBool[item];
			});
			return veganOnly;
		});

		console.log(`Есть вегетарианское блюдо ${veganDish}`);


		//every
		let allVeganDish = dish.every(function (item, index, arr) {
			vega = item.ingridients.every(function (item, index, arr) {
				return veganBool[item];
			});
			return vega;
		});

		console.log(`Все блюда вегетарианские ${allVeganDish}`);



		//filter
		let filtDish = dish.filter(function (item, index, arr) {
			vegas = item.ingridients.every(function (item, index, arr) {
				return veganBool[item];
			})
			return vegas;
		});

		console.log(`${JSON.stringify(filtDish)}`);

	})
	.catch((error) => console.log(error));

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