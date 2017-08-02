// function experssion() //函數表達式 var foo = function(){} (IIFE, not hoisting)
// function declaration() //函數聲明 => function foo() (hoisting)
// String.keys(array);
// String.toLowerCase(); //小寫
// String.toUpperCase(); //大寫
// String.replace(origin, new);
// String.prototype.localeCompare()//返回數字


// Array.prototype.indexOf();
// Array.slice(start,[end]);//尋找start ~ end, create a new array
// Array.prototype.shift(); //刪除 to start
// Array.prototype.unshift(); //加入 to start
// Array.prototype.push(); //在array end加入內容
// Array.prototype.pop(); //移除array end內容
// array.forEach(function(item, index, array) {}, this);
// Array.prototype.length; //array.number
// Array.prototype.copyWithin(被取代的對象, 取代的對象, 中止);
// Array.prototype.fill(value, [start], [end]);
// Array.prototype.reverse(); //反轉array
// Array.prototype.sort(a, b); //排序 
// if(a < b) { return -1 => 1-3 }
// if(a > b) { return 1 => 3-1 }
// Array.prototype.map();
// Array.prototype.splice(start, delectCount, items);
// Array.prototype.concat(); // 合併數組
// Array.prototype.includes(searchItem, fromIndex) //包含某個數組. return true or false
// Array.prototype.lastIndexOf(searchElement, fromIndex) //從searchElement往後搜索
// Array.prototype.toString()
// Array.prototype.toLocaleString()
// Array.prototype.entries()
// Array.prototype.every() // return true or false
// Array.prototype.filter(elem, index, array)
// Array.prototype.find(elem, index, array) //find value
// Array.prototype.findIndex() //find index
// Array.prototype.forEach(currentValue, index, array);




var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var result = [];

var arr = array.forEach((elem, index) => {
    if (array.indexOf(elem) === index) {
        result.push(elem)
    }
});

console.log(result)

// var result = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];

// var arr = array.find((elem, index, array) => array.indexOf(elem) === index); //return the first match elem
// var arr = array.filter((elem, index, array) => array.indexOf(elem) === index );
// var arr = Array.from( new Set(array) )

// console.log(arr)


// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// // function filterItems(item) {
// //     return fruits.filter(function (el) {
// //         return el.toLowerCase().indexOf(item.toLowerCase()) > -1;
// //     })   
// // }
// const filterItems = (item) => {
//     return fruits.filter((el) =>
//         el.toLowerCase().indexOf(item.toLowerCase()) > -1
//     )
// }


// console.log(filterItems("app"))

// var arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ];

// var invalidEntries = 0;

// function isNumber(obj) {
//     return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
// }

// function filterById(item) {
//     if(isNumber(item.id)) return true;
//     invalidEntries++;
//     return false;
// }

// var arrById = arr.filter(filterById);
// console.log(arrById)



// var a = ['a', 'b', 'c'];
// var iterator = a.entries();

// for (let e of iterator) {
//     console.log(e)
// }



// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
// var mapped = list.map(function (item, i) {
//     return {
//         index: i,
//         value: item.toLowerCase()
//     }
// })

// var sortList = mapped.sort(function (a, b) {
//     return +(a.value > b.value) 
// })

// var result = mapped.map(function (el) {
//     return list[el.index]
// })

// console.log(result)






// var stringArray = ['Balue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log('stringArray', stringArray.join());
// console.log('Sorted:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort()); // [1, 200, 40, 5]
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers)); // [1, 5, 40, 200]

// console.log('numericStringArray:', numericStringArray.join()); // 80,9,700
// console.log('Sorted without a compare function:', numericStringArray.sort()); ['700','80','9']
// console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers)); // ['9','80', '700']

// console.log('mixedNumericArray:', mixedNumericArray.join()); // 80,9,700,40,1,5,200
// console.log('Sorted without a compare function:', mixedNumericArray.sort()); // [1, 200, 40, 5, "700", "80", "9"]
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers)); // [ 1, 5, '9', 40, '80', 200, '700' ]






//方法二
// function myObj(name, msg) {
//     this.name = name.toString();
//     this.msg = msg.toString();
// }
// (function () {
//     this.getName = function () {
//         return this.name;
//     }
// }).call(myObj.prototype);


//方法一
// function myObj(name, msg) {
//     this.name = name.toString();
//     this.msg = msg.toString();
// }
// myObj.prototype.getName = function () {
//     return this.name
// }


// function showHelp(help) {
//     document.querySelector('#help').innerHTML = help;
// }

// function makeHelpCallback(help) {
//     return function () {
//         showHelp(help)
//     }
// }

// function setupHelp() {

//     var helpText = [
//       {'id': 'email', 'help': 'Your e-mail address'},
//       {'id': 'name', 'help': 'Your full name'},
//       {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];

//     for (var i = 0; i < helpText.length; i++) {

//         //方法三
//         // let item = helpText[i];
//         // document.getElementById(item.id).onfocus = function () {
//         //     showHelp(item.help)
//         // }
        
//         //方法一
//         // var item = helpText[i];
//         // document.getElementById(item.id).onfocus = makeHelpCallback(item.help);

//         //方法二
//         // (function(){
//         //     var item = helpText[i];
//         //     document.getElementById(item.id).onfocus = function () {
//         //         showHelp(item.help)
//         //     }
//         // })();
//     }

// }

// setupHelp()


// var counter = (function(){
//     var privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function () {
//             changeBy(1)
//         },
//         decrement: function () {
//             changeBy(-1)
//         },
//         value: function () {
//             return privateCounter;
//         }
//     }
// })()



// function makeSizer(size) {
//     return function(){
//         document.body.style.fontSize = size + 'px'
//     }
// };

// var size12 = makeSizer(12);

// document.getElementById('size-12').onclick = size12



// var arr = ['a','b','b','c'];
// var result = [];
// var count = 0;
// var idx = arr.indexOf('a');




// var list = document.querySelector('.output ul');
// // list.innerHTML = '';

// var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (var i = 0; i < stations.length; i++) {
//     var input = stations[i];
//     var threeItem = input.slice(0,3);
    
//     var nameItem = input.slice(input.indexOf(';')+1);

//     var result = threeItem + ':' + nameItem;

//     var listLi = document.createElement('li');
//     listLi.textContent = result;
//     list.appendChild(listLi)
// };



// var list = document.querySelector('.output ul');
// var totalBox = document.querySelector('.output p');
// var total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// var number1 = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];

// for (var i = 0; i < number1.length; i++) {

//     var subArray = number1[i].split(':');
//     console.log(number1[i])
//     console.log(subArray)
//     var input = number1[i];
//     var itemPrice = Number(input.slice(input.indexOf(':')+1));
//     var itemName = input.slice(0, input.indexOf(':'));
    
//     total += itemPrice;

//     itemText = itemName + '—' + '$'+itemPrice;
     
//     var listLi = document.createElement('li');
//     listLi.textContent = itemText;
//     list.appendChild(listLi);

//     totalBox.textContent = 'Total:' + '$'+total.toFixed(2)
// }

// var list = document.querySelector('.output ul');
// var searchInput = document.querySelector('.output input');
// var searchBtn = document.querySelector('.output button');

// // list.innerHTML = '';
// var myHistory = [];

// searchBtn.onclick = function () {
//     if(searchInput.value !== '') {
//         myHistory.unshift(searchInput.value);

//         for (var i = 0; i < myHistory.length; i++) {
//             var itemText = myHistory[i];
//             var listItem = document.createElement('li');
//             listItem.textContent = itemText;
//             list.appendChild(listItem);
//         }

//         if(myHistory.length >= 5) {
//             myHistory.pop();
//         }

//         searchInput.value = '';
//         searchInput.focus();

//     }
// }



