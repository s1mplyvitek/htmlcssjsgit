//Напишите функцию принимающую два числа и возвращающую меньшее из них

//function ADCosmonaut(arterialPressure) {
//	if (arterialPressure == 80) {
//		return true;
//	} else if (arterialPressure == 120) {
//		return false, alert('это систола');
//	} 
//}
//
//let arterialPressure = prompt('Нужно диастолическое давление космонавта');
//
//if (ADCosmonaut(arterialPressure)) {
//	alert('Nice');
//}  else {
//	alert('Ты точно учился в меде?');
//}



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
	ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
};

let dish = [
buuza,
blackSoup,
brtuch,
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
};

for (let i = 0; i < dish.length; i++) {
let sum = 0;
for (let s = 0; s < dish[i].ingridients.length; s++) {
	sum += expenseIngr[dish[i].ingridients[s]];
}
dish[i].expense = sum;
};

console.log(`Стоимость ингредиентов: ${JSON.stringify(dish)}`);

function funProfit(price,expense) {
	return price - expense;
}

for (let i = 0; i < dish.length; i++) {
	dish[i].funConnectProfit = funProfit(dish[i].price, dish[i].expense);
};
console.log(`Стоимость ингредиентов: ${JSON.stringify(dish)}`);

