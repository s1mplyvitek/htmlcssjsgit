let dish = [
    {
        buuza: 'buuza', 
        price: '70', 
        expense: '30', 
        ingridients: ['meat', 'water', 'solt', 'onion',],},
        
    { 
        blackSoup: 'blackSoup', 
        price: '100', 
        expense: '40', 
        ingridients: ['meat', 'water', 'solt',],},

    { 
        brtuch: 'brtuch', 
        price: '150', 
        expense: '60', 
        ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],},
];
console.log(dish);
//dish.splice(2);
dish.shift();
dish.unshift('buuza');
const price = [70, 100, 150];
const price2 = [30, 40, 60];
const sum = price.reduce((total, amount) => total + amount ) - price2.reduce((total, amount) => total + amount);
console.log(sum)