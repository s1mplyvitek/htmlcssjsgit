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
    for (let s = 0; s < dish[i].ingridients.length; s++) {
        sum += expense[dish[i].ingridients[s]];
    }
    dish[i].expense = sum;
};

console.log(`Стоимость ингредиентов: ${JSON.stringify(dish)}`);

for (let i = 0; i < dish.length; i++) {
    
    dish[i].connectProfit = dish[i].price - dish[i].expense;
};

console.log(`${JSON.stringify(dish)}`);





//let dish1 = {
//    name: 'dishA',
//    price: 50,
//    cookingPrice: '',
//    ingredients: ['bread', 'water', 'solt'],
//};
//
//let dish2 = {
//    name: 'dishB',
//    price: 40,
//    cookingPrice: '',
//    ingredients: ['sugar', 'flour'],
//};
//
//let dish3 = {
//    name: 'dishC',
//    price: 30,
//    cookingPrice: '',
//    ingredients: ['solt', 'sugar'],
//};
//
//let consist = {
//    bread: 10,
//    water: 5,
//    solt: 5,
//    sugar: 10,
//    flour: 10
//};
//
//let dishs = [dish1, dish2, dish3];
//
//for (let i = 0; i < dishs.length; i++) {
//    let vse = 0;
//    for (q = 0; q < dishs[i].ingredients.length; q++) {
//        vse += consist[dishs[i].ingredients[q]];
//    }
//    dishs[i].cookingPrice = vse;
//};
//console.log(`${JSON.stringify(dishs)}`);
//
//for (let i = 0; i < dishs.length; i++) {
//    dishs[i].moznoyasvami = dishs[i].price - dishs[i].cookingPrice;
//};
//
//console.log(`${JSON.stringify(dishs)}`);
//
//let interesno = 0;
//for (let i = 0; i < dish1.ingredients.length; i++) {
//    interesno += consist[dish1.ingredients[i]];
//}
//console.log(interesno);
