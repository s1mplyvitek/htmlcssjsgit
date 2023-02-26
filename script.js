for (let num = 1; num < 6; num++) {
    console.log(num*2);
}
for (let num = 5; num > 4; num++) {    
    if (num == 10) break;
    console.log(`перерыв, num = ${num}`);
}
let dish = [
    {
        name: 'buuza', 
        price: 70,        
        ingridients: ['meat', 'water', 'solt', 'onion',],
        },
        
    { 
        name: 'blackSoup', 
        price: 100,         
        ingridients: ['meat', 'water', 'solt',],},

    { 
        name: 'brtuch', 
        price: 150,       
        ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],}
]       


//for (let i = 0; i < dish.length; i++) {
//    dish[i].price += dish[i]
//}
//console.log(dish[i].price);

const meat = 30;
const water = 5;
const solt = 5;
const onion = 15;
const salad = 15;
const bread = 10;
const sauce = 15;
const cheese = 10;

let expenseBuuza = [meat, water, solt, onion,];

let sumArray = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum);
}
sumArray(expenseBuuza);
let expense = sumArray(expenseBuuza);

//let sumArray = (Array) => {
//    let price = dish[i];
//    for(let i = 0; i < Array.length; i++) {
//        price -= Array[i]
//    }
//    console.log(price)
//}
//sumArray(dish);
