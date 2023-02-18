let dish = [
    {
        buuza: 'buuza', 
        price: 70, 
        expense: 30, 
        ingridients: ['meat', 'water', 'solt', 'onion',],
        },
        
    { 
        blackSoup: 'blackSoup', 
        price: 100, 
        expense: 40, 
        ingridients: ['meat', 'water', 'solt',],},

    { 
        brtuch: 'brtuch', 
        price: 150, 
        expense: 60, 
        ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],},
];

let copy = dish[0];
console.log(dish);

dish.shift();
dish.unshift(copy);
console.log(copy);
console.log(typeof copy);
console.log(copy.ingridients);
copy.ingridients.splice(3);
console.log(copy.ingridients);

//console.log(dish);
//console.log(dish[0].price);
//console.log(dish[0].expense);
sum = dish[0].price - dish[0].expense;
console.log(sum);

//console.log(dish[1].price);
//console.log(dish[1].expense);
sum = dish[1].price - dish[1].expense;
console.log(sum);

//console.log(dish[2].price);
//console.log(dish[2].expense);
sum = dish[2].price - dish[2].expense;

console.log(sum);

dish.splice(1);

alert(JSON.stringify(copy));

//let num;
//num = 3 + 3;
//console.log(num);
//let a = price;
//let b = expense;
//console.log(a - b);
//copy[0] = 'poza';
//console.log(copy);


//consol.log(dish[0].ingridients);

//const price = [0,1,2]

//console.log(ingridients);


//const price = [70, 100, 150];
//const price2 = [30, 40, 60];
//const sum = price.reduce((total, amount) => total + amount ) - price2.reduce((total, amount) => total + amount);
//console.log(sum)