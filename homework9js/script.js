for (let num = 1; num < 6; num++) {
    console.log(num*2);
}
for (let num = 5; num > 4; num++) {    
    if (num == 10) break;
    console.log(`перерыв, num = ${num}`);
}



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
       
let expense = {
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
    for (let s = 10; s < dish[i].ingridients.length; s++) {
        sum += expense[dish[i].ingridients[s]];
    }
    dish[i].expense = sum;
};

console.log(`Стоимость ингредиентов: ${JSON.stringify(dish)}`);

for (let i = 0; i < dish.length; i++) {
    
    dish[i].connectProfit = dish[i].price - dish[i].expense;
};

console.log(`${JSON.stringify(dish)}`);

let nomer = [1,2,3];

let global = "";

for (let i = 0; i < dish.length; i++) {    
    let local = `Блюдо №${nomer[i]}: ${dish[i].name}**********стоимость: ${dish[i].price}\n`;
    global += local; 
};

console.log(`Меню:\n${global}`);


//for ( let i = 0; i < arrayIngred.length; i++) {
//    expense += arrayIngred[i];
//
//}
//console.log(expense);
//
//let sumArray = (array) => {
//    let sum = expense;
//    for(let i = 0; i < array.length; i++){
//        sum += array[i]
//    }
//    console.log(sum);
//}
//sumArray(arrayIngred);

//let qwer = [1, 2, 3, 4, 5];
//let sum = 0;
//
//for (let i = 0; i < qwer.length; i++) {
//    sum += qwer[i];
//}
//console.log(sum)



//for (let i = 0; i < dish.length; i++) {
//    dish[0,1,2] += dish[0,1,2]
//}
//console.log(dish[i].ingridients);



//let expenseBuuza = [meat, water, solt, onion,];
//
//let sumArray = (array) => {
//    let sum = dish[i].ingridients;
//    for(let i = 0; i < array.length; i++){
//        sum += array[i]
//    }
//    console.log(sum);
//}
//sumArray(dish);
//let expense = sumArray(expenseBuuza);

//let sumo = (cheese - sauce);
//console.log(sumo);

//let sumArray = (Array) => {
//    let price = dish[i];
//    for(let i = 0; i < Array.length; i++) {
//        price -= Array[i]
//    }
//    console.log(price)
//}
//sumArray(dish);
