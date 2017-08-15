// function experssion() //函數表達式 var foo = function(){} (IIFE, not hoisting)
// function declaration() //函數聲明 => function foo() (hoisting)
// String.keys(array);
// String.toLowerCase(); //小寫
// String.toUpperCase(); //大寫
// String.replace(origin, new);
// String.prototype.localeCompare()//返回數字
// function.length;
// function.name; //function.bind().name => return bound.name
// get;
// set
// Object.defineProperty(target, name, desc)
// Function.prototype.apply() //接受一個參數組
// Function.prototype.call() //接受若干個參數列表
// Function.prototype.bind(this, array) //
// Function.prototype.toString()
// Function.length
// Function.name
// Function.prototype



// Object.prototype.__proto__;
// Object.prototype.constructor; //read only
// Object.assign(target, sources) //clone
// Object.create(array, [propertiesObject])
// Object.defineProperty() //定義新屬性
// Object.defineProperties()
// Object.getOwnPropertyDescriptor(target, prop)
// Object.getOwnPropertyDescriptors(target)
// Object.getOwnPropertyNames(obj)
// Object.getPrototypeOf(obj)
// Object.is(value1, value2) 
// Object.isExtensible(obj) //return true or false 判斷是否可以擴展
// Object.isFrozen(obj) //return true or false 判斷是否被冰凍(不可擴展)
// Object.isSealed(obj) //return true or fasle 判斷是被密封
// Object.keys(obj) //
// Object.preventExtensions(obj) //讓obj變得不可擴展. 也不可再添加新的屬性
// Object.prototype.hasOwnProperty(prop) //return true or false
// Object.prototype.isPrototypeOf(obj) //return true or false
// Object.prototype.propertyIsEnumerable(prop)  //return true or false
// Object.prototype.toLocaleString() //
// Object.prototype.toSource()
// Object.prototype.toString() //
// Object.prototype.valueOf() //
// Object.seal()
// Object.values() //


// Array Iterator
// Array.prototype.keys()
// Array.prototype.values()
// Array.prototype.entries()


// Array.from(obj, map, [this])
// Array.isArray(obj) //return true or false
// Array.of()

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
// Array.prototype.every(curr, index, array) // return true or false
// Array.prototype.filter(elem, index, array)
// Array.prototype.find(elem, index, array) //find value
// Array.prototype.findIndex() //find index
// Array.prototype.forEach(currentValue, index, array);
// Array.prototype.keys() //return index
// Array.prototype.reduce(first, currentValue, currentIndex, array) //
// Array.prototype.some(elem, index, array) //return true or false
// Array.prototype.values();
// Array.prototype[@@iterator]

// <input type="file" accept="video/*" capture="camcorder" >

// draggable & droppable

// text-plain, image/jpeg, text/uri-list, application/x-moz-file 
// mozSetDataAt用於非文本數據.
// event.preventDefault() 用在 dragenter及dragover

// var dt = event.dataTransfer;
// dt.mozSetDataAt("image/jpeg", stream, 0);
// dt.mozSetDataAt("application/x-moz-file", file, 0);
// dt.setData("text/uri-list", imageurl);

// *DragEvent => 有一個建構式及一個屬性.
// *DataTransfer => 包含拖曳事件的狀態. ex.正在進行拖曳事件的類型(copy, move), 拖曳中的資料及每一個項目的檔案類型.(getData(), setData())
// *DataTransferItem => 每一個items表示一個drag. 每一種都是data(string or file), type是資料的type(mime type), 也具有拖動獲取數據的方法(getAsString())
// *DataTransferItemList => 

// *dragstart()

// Date.prototype================================================================
// Date.UTC(year, month, date, hrs, min, sec, ms);
// Date.now(); //從初始時間到現在的毫秒數, number
// Date.parse(dateString)
// Date.prototype.getDate() //一個月中的第幾天
// Date.prototype.getDay(); //一周中的第幾天













// var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0))
// console.log(new Date( Date.now()))
// console.log(Date.parse('Aug 25, 1983'))
const today = new Date( Date.now() );

console.log(today.getDay())






// const upload = document.querySelector('#upload');
// const drop = document.querySelector('#drop');
// const deletebtn = document.querySelector('#delete');
// let targetElem = null;
// let dropImgs = [];
// const max = 3;


// function startEvent(el) {
//   const target = el.target;
//   target.style.opacity = .5;
//   targetElem = this;
//   el.dataTransfer.setData("text/uri-list", target.src);
//   el.dataTransfer.setData("text/plain", target.dataset.num);
//   el.dataTransfer.effectAllowed = "move";
// }
// function enterEvent(el) {
//   const target = el.target;
//   el.stopPropagation();
//   el.preventDefault();
//   target.classList.add('over')
// }
// function leaveEvent(el) {
//   const target = el.target;
//   target.classList.remove('over');

// }
// function endEvent(el) {
//   const target = el.target;
//   target.style.opacity = 1;
  
//   [].forEach.call(dropImgs, (elem) => {
//     elem.classList.remove('over')
//   })
// }
// function overEvent(el) {
//   el.stopPropagation();
//   el.preventDefault();
//   el.dataTransfer.dropEffect = "move";
// }
// function dropEvent(el) {
//   el.stopPropagation();
//   el.preventDefault();
//   el.target.classList.remove('over');

//   var dt = el.dataTransfer;
//   var data = dt.getData("text/uri-list"); //copy elem
//   var dataSet = dt.getData("text/plain"); //copy elem
//   var files = dt.files;

//   targetElem.dataset.num = this.dataset.num; //1
//   targetElem.src = this.src;
//   el.target.dataset.num = dataSet; //0
//   el.target.src = data;
// }







// function imgPreview(files) {

//   const fileList = this.files;

//   for(let i = 0; i < fileList.length; i++) {
//     var file = fileList[i];
//     var imageType = /image.*/;


//     if (!file.type.match(imageType)) {
//       continue;
//     }
    
//     var img = document.createElement("img");
//     img.file = file;
//     drop.appendChild(img);
    
//     var reader = new FileReader();

//     reader.onload = (
//       function(aImg) { 
//         return function(e) { 
//           aImg.src = e.target.result; 
//         }; 
//       })(img);

//     reader.readAsDataURL(file);

//     reader.addEventListener("load", function (el) {
//       const dropImgs = drop.querySelectorAll('img');

//       img.setAttribute('data-num', dropImgs.length);

//       if( dropImgs.length >= max) {
//         alert('上傳照片最多三張')
//         upload.style.display = 'none'
//       } else {
//         upload.style.display = 'block'
//       };

//       function addOverEvent(el) {
//         el.stopPropagation();
//         el.preventDefault();
          
//         [].forEach.call(dropImgs, (elem) => {
//           if (elem !== el.target) elem.classList.remove('over')
//         });
//         el.target.classList.add('over');
//       };
      

//       [].forEach.call(dropImgs, (elem) => {
//         elem.addEventListener('dragstart', startEvent, false);
//         elem.addEventListener('dragenter', enterEvent, false);
//         elem.addEventListener('dragover', overEvent, false);
//         elem.addEventListener('dragleave', leaveEvent, false);
//         elem.addEventListener('dragend', endEvent, false);
//         elem.addEventListener('drop', dropEvent, false);
//         elem.addEventListener('click', addOverEvent, false);
//       })

//     })
    
//   }

// };

// function deleteEvent(el) {
//   const over = document.querySelector('.over');
//   const dropImgs = drop.querySelectorAll('img');
//   // let keys = [];
//   // let overfiles = 0;
//   if ( over ) {
//     const overDataSet = over.dataset.num;
//     over.remove()
//   };
  
//   Array.prototype.filter.call(dropImgs, function (image) {

//     //當刪除鈕隱藏且image中包含over
//     if( upload.style.display == 'none' && image.classList.contains('over') === true) {
//       upload.style.display = 'block'
//     }
//   })
  
// }

// upload.addEventListener('change', imgPreview, false);
// deletebtn.addEventListener('click', deleteEvent, false)





























// var obj = {
//   foo: 'bar',
//   baz : 42
// }
// console.log(Object.values(obj))


// function Dog(name, breed, color, sex) {
//   this.name = name;
//   this.breed = breed;
//   this.color = color;
//   this.sex = sex;
// }

// var theDog = new Dog("Gabby","Lab","chocolate","female");

// Dog.prototype.toString = function dogToString() {
//   var ret = "Dog " + this.name + " is a " + this.sex + " " + this.color + " " + this.breed;
//   return ret;
// }



// var o = {};
// var a = [];
// o.prop = 'is enumerable';
// a[0] = 'is enumerable';

// o.propertyIsEnumerable('prop'); //true
// a.propertyIsEnumerable(0) //true



// let proto = {};
// let obj = Object.create(proto);

// Object.getPrototypeOf(obj) // ===proto

// Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// )

// function aClass() {};
// aClass.prototype = {};

// function bClass(){};
// bClass.prototype = Object.create(aClass.prototype, Object.getOwnPropertyDescriptors({
//   // ...content
// }))


// var o, d;

// o = {
//   get foo(){
//     return 17
//   }
// };

// d = Object.getOwnPropertyDescriptor(o, 'foo')



// var o = {};
// Object.defineProperty(o, 'a', {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// var bValue;
// Object.defineProperty(o, 'b', {
//   get: function(){
//     return bValue;
//   },
//   set: function(newValue){
//     bValue = newValue
//   },
//   enumerable: true,
//   configurable: true,
// })

// o.b = 38;



// function Shape(){
//   this.x = 0;
//   this.y = 0;
// };

// Shape.prototype.move = function (x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Shape moved.')
// };

// function Rectangle() {
//   Shape.call(this)
// };

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// var rect = new Rectangle();
// console.log(rect instanceof Rectangle)
// console.log(rect instanceof Shape);
// rect.move(1,1)



// var obj = {
//   foo: 1,
//   get bar() {
//     return 2
//   }
// }

// var copy = Object.assign({}, obj);
// console.log(copy)


// var obj = {a: 1};
// var copy = Object.assign({}, obj);
// console.log(copy)


// function Tree(name) {
//   this.name = name;
// }

// var theTree = new Tree('Anna');
// console.log(`theTree.construncor is ${theTree.constructor}`);

// function greet() {
//   var reply = [this.person, 'Anna', this.role];
//   console.log(reply)
// }
// var i = {
//   person: 'jerry',
//   role: 'bike'
// };
// greet.call(i)


// var animals = [
//   { species: 'Lion', name: 'King'},
//   { species: 'Whale', name: 'Fail'}
// ];

// for (var i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function () {
//       console.log(`#${i} ${this.species} : ${this.name}`)
//     }
//     this.print()
//   }).call(animals[i], i)
// }



// function product(name, price) {
//   this.name = name;
//   this.price = price
// }

// function food(name, price) {
//   product.call(this, name, price);
//   this.category = 'food'
// }

// function Toy(name, price) {
//   product.call(this, name, price);
//   this.category = 'toy'
// }

// var cheese = new food('feta', 5);
// var fun = new Toy('robot', 40);

// console.log(cheese)
// console.log(fun)


// var unboundSlice = Array.prototype.slice();
// var slice = Function.prototype.apply.bind(unboundSlice);

// slice(arguments)


// var slice = Array.prototype.slice();

// slice.apply(arguments)


// function list() {
//   return Array.prototype.slice.call(arguments)
// }

// var list1 = list(1,2,3);

// console.log(list1);

// var leading = list.bind(null, 37);

// var list2 = leading();
// console.log(list2);

// var list3 = leading(1,2,3)
// console.log(list3)

// this.x = 9;
// var module = {
//   x: 81,
//   getX: function() { return this.x}
// }

// // console.log(module.getX());

// var retrieveX = module.getX;
// // retrieveX()
// console.log(retrieveX())

// var boundGetX = retrieveX.bind(module)
// console.log(boundGetX())


// var numbers = [5, 6, 2, 3, 7];

// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);

// max = -Infinity; 
// min = +Infinity;

// for (var i = 0; i < numbers.length; i++) {
//   if ( numbers[i] > max ) {
//     max = numbers[i]
//   }
//   if ( numbers[i] < min ) {
//     min = numbers[i]
//   }
// }

// console.log(min)

// function myConstructor() {
//   for (var i = 0; i < argu.length; i++) {
//     this['property' + i] = argu[i]
//   }
// }

// var myArray = [4, 'Hello world!', false];
// var myInstance = myConstructor.construct(myArray);

// console.log(myInstance.property1)


// Function.prototype.construct = function(aArgs) {
//   var oNew = Object.create(this.prototype);

//   this.apply(oNew, aArgs);
//   return oNew;
// }

// function foo(){};
// var Foo = new foo();

// Foo.constructor.name === 'foo' ? console.log('foo') : console.log('ooop')

// function foo() {}
// Object.defineProperty(foo, 'run', { writable: true});

// foo.run = function () {}

// var newFoo = new foo();
// console.log(newFoo.constructor.run)

// foo.run = 'hello';
// console.log(foo.run)



// function foo() {};

// var fooInstance = new foo();
// console.log(fooInstance.constructor.name)

// var o = {
//   get foo(){},
//   set foo(x){}
// }

// var desc = Object.getOwnPropertyDescriptor(o, 'foo');

// console.log(desc.get.name)
// console.log(desc.set.name)

// var langu = {
//   set current(name) {
//     this.log.push(name)
//   },
//   log: []
// }

// langu.current = 'EN';
// console.log((langu.log))



// var expr = 'foo';
// var obj = {
//   // get [expr]() { return 'bar' },
//   baz: 'bar',
//   set [expr](c) { this.baz = c }
// }

// console.log(obj.baz);
// obj.foo = 'box';
// console.log(obj.baz);



// var o = { a: 0 };
// Object.defineProperty(o, 'b', {
//   get: function(){
//     return this.a + 1
//   },
//   set: function (x) {
//     return this.a = x / 2
//   }
// })

// o.b = 10;

// console.log(o.b)
// console.log(o.a)

// var obj = {
//   log: ['test'],
//   get latest(){
//     this.log.length == 0 ? undefined : '';
//     return this.log[this.log.length - 1]
//   }
// }

// console.log(obj.latest)


// var board = [ 
//   ['R','N','B','Q','K','B','N','R'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['r','n','b','q','k','b','n','r'] ];

// // console.log(board.join('\n'));

// board[4][4] = board[6][4];
// board[6][4] = ' ';

// console.log(board.join('\n'));




// var arr = ['w', 'y', 'k', 'o', 'p'];
// var eArr = arr[Symbol.iterator]();

// for (let letter of eArr) {
//   console.log(letter)
// }



// function isBiggerThan10(elem, index, array) {
//   return elem > 10
// }

// [2, 5, 8, 1, 4].some(isBiggerThan10); 

// var friends = [{
//   name: 'Anna',
//   books: ['Bible', 'Harry Potter'],
//   age: 21
// }, {
//   name: 'Bob',
//   books: ['War and peace', 'Romeo and Juliet'],
//   age: 26
// }, {
//   name: 'Alice',
//   books: ['The Lord of the Rings', 'The Shining'],
//   age: 18
// }];

// var allBooks = friends.map(e => e.books)
//                       .reduce((a, b)  => {
//                         return a.concat(b)
//                       })

// console.log(allBooks)

// var allBooks2 = friends.reduce((prev, curr) => {
//   return [...prev, ...curr.books];
// }, []);

// console.log(allBooks2)


// var names = ['a', 'b', 'c', 'd','a'];
// var countNames = names.reduce(function(allNames, name){
//   if ( name in allNames ) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})

// console.log(countNames)

// var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
// var maxCallback2 = (max, cur) => Math.max(max, cur);

// var arr = [{x: 10}, {x: 20}];
// var an1 = arr.reduce( maxCallback );
// var an2 = arr.map(e => e.x)
//              .reduce( maxCallback2 )

// console.log(an1)
// console.log(an2)

// var total = [7,6,5,4].reduce((sum, value, index) => {
//   // return sum + value
//   console.log(value)
// });
// console.log(total);

// var flattened = [[0,1],[2,3],[4,5]].reduce((a,b) => a.concat(b));
// console.log(flattened) 


// var array = ['a', 'k', 'a', 'c', 'a', 'd','z', 'k'];
// var result = [];

// // var arr = array.forEach((i) => {
// // //   console.log(result[elem])
// //   !result[i] && (result[i] = false);
// // })
// var arr = array.forEach((elem, index) => {
//     if (array.indexOf(elem) === index) {
//         result.push(elem)
//     }
// });

// console.log(Object.keys(result))
// console.log(Object.keys(result))

// var words = [1, 2, 3, 4, 5, 6];
// words.forEach((word) => {
//     console.log(word);
//     word === 1 && words.shift(); //刪除if中的下一個值
// })

// console.log(words)

// function copy(obj) {
//     var copy = Object.create(Object.getPrototypeOf(obj));
//     var propNames = Object.getOwnPropertyNames(obj);

//     propNames.forEach(function (name) {
//         var desc = Object.getOwnPropertyDescriptor(obj, name);
//         Object.defineProperty(copy, name, desc)
//     })

//     return copy
// }

// var obj1 = { a: 1, b: 2};

// var obj2 = copy(obj1);

// console.log(obj2)

// function counter() {
//     this.sum = 0;
//     this.count = 0;
// }

// // counter.prototype.add = function (array) {
// //     array.forEach(function(entry) {
// //         this.sum += entry;
// //         ++this.count
// //     }, this);
// // }

// counter.prototype.add = function(array){
//     array.forEach((entry) => {
//         this.sum += entry;
//         ++this.count
//     })
// }

// var obj = new counter();
// obj.add([2,5,9]);
// console.log(obj.count);
// console.log(obj.sum);

// function c() {
//     this.a = 37
// }
// var o = new c();
// console.log(o.a);

// function c2() {
//     this.a = 37;
//     return {
//         a: 40
//     }
// }

// o = new c2();
// console.log(o.a)

// fun
// var o = {
//     f: function () {
//         return this.a + this.b;
//     }
// }

// var p = Object.create(o);
// p.a = 1;
// p.b = 4;
// console.log(p.f())

// var o = {
//     prop: 37,
//     // f: function () {
//     //     return this.prop;
//     // }
// }
// function fFn() {
//     return this.prop;
// }
// o.f = fFn;

// o.b = {
//     g: fFn,
//     prop: 42
// }

// console.log(o.b.g())
//this under Global context
// this = window;

// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var result = [];

// var arr = array.forEach((elem, index) => {
//     if (array.indexOf(elem) === index) {
//         result.push(elem)
//     }
// });

// console.log(result)

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



