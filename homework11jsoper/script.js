//let names = prompt('What is your name?', '');


//
//for (let key in dataStore) {
//    let names = prompt('What is your name?', '');
//    if (names === key) {
//        let password = prompt('Enter password.');
//        if (password == dataStore[key]) {
//            alert('You are logged in.');
//        } else if(password === '' || password === null) {
//            alert('Exit.');
//        } else {
//            alert('Wrong password.');
//        }
//    } else if(names === '' || names === null) {
//        alert('Exit.');
//    } else {
//        alert('No such user exists.');
//    }
//};
let names = prompt('What is your name?', '');
let password = prompt('Enter password.', '');

let dataStore = {
    Keanu: 'neo',
    Christian: 'batman',
    Wilson: 'ball',
};

if (names in dataStore && dataStore[names] == password) {
    alert('You are logged in')
} else if (!(names in dataStore)) {
    alert('No such user exists.')
} else if (dataStore[names] !== password) {
    alert('Wrong password.')
}; 
    
 


//if (names == 'Keanu' && password == 'neo') {    
//    console.log('hi')
//} else if(password !== 'neo') {
//    console.log('passwhere ?')
//} else {
//    console.log('user not')
//}


//
//for (let key in dataStore) {
//    if (names == Keanu && Christian && Wilson) {
//        let password = prompt('Enter password.');
//        if (password == dataStore[key]) {
//            alert('You are logged in.');
//        } else if(password === '' || password === null) {
//            alert('Exit.');
//        } else {
//            alert('Wrong password.');
//        }
//    } else if(names === '' || names === null) {
//        alert('Exit.');
//    } else {
//        alert('No such user exists.');
//    }
//};
//

//if (names == '') {
//    let password = prompt('Enter password.');    
//    if (password == '') {
//        alert('You are logged in.');
//    } else if(password === '' || password === null) {
//        alert('Отмена');
//    } else {
//        alert('Wrong password.');
//    }
//} else if(names === '' || names === null) {
//    alert('Отмена');
//} else {
//    alert('No such user exists.');
//};
//let data = {
//   price1: 1,
//   price2: 0,
//   price3: "",
//   price4: 1,
//   price5: 5
//};
//for (let key in data) {
//   if (data[key] !== '' && data[key] !== 0 && data[key] !== 1) {
//       console.log(key + 'aw ' + data[key])
//     
//   }       
//


//for (key in dataStore) {
//    console.log(dataStore[key]);
//    console.log(key);
//}
//let key = 'Keanu';
//alert(dataStore[key]);



//
//if (dataStore.Keanu == ) {
//    let password = prompt('Enter password');
//    if (password == 'neo', 'batman') {
//        alert('Вы вошли')
//    } else {
//        alert('Неправильный пароль')
//    }
//} else {
//    alert('Такого пользователя не существует')
//}


//let key = 'Keanu'


//if (names == 'Christian') {
//    let password = prompt('Enter password');
//    if (password == 'batman') {
//        alert('Вы вошли')
//    } else {
//        alert('Неправильный пароль')
//    }
//} else {
//    alert('Такого пользователя не существует')
//};


//if (names = 'keanu' || 'Christian' || 'Wilson') {
//    alert('Такой пользователь есть');    
//} else {
//    alert('Такого пользователя не cуществует')
//}
//
//

