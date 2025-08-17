//FUNCTION CURRING

// const multiply = (x, y) => {
//   console.log(x * y);
// };

// const multiplyByTwo = multiply.bind(this, 2, 3);
// multiplyByTwo(5); // Outputs: 10

// const multiply = (y)=>{
//     const x=2;
//     console.log(x*y)
// }

// const multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5); // Output: 15

// const multiply = (y)=>{
//     const x=3;
//     console.log(x*y)
// }

//bind function just copies the function and returns a new function.
//bind function is used to change the context of the function
//here the value of x is replaces by 2 using the this function

//FUNCTION CLOSURES

// const closureFunction=function(x){
// return function (y){
//     console.log(x*y)
// }
// }

// const closureFunction2=closureFunction(2)
// closureFunction2(3)  //Output: 6

//similar to bind function, here also we are using a predefined function ie closureFunction and we r using it

// const closureFunction3=closureFunction(3)
// closureFunction3(3) //Output: 9

// In javascript the functions are a first class functions , that means we can assign function to a const variable , we can pass it as an argument or also return it within another function, it just behaves as an ordinary class or objects

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d;
//             };
//         };
//     };
// }
// console.log(sum(1)(2)(3)(4));  // Output: 10

// here we apply the concept of closure , that is we r calling another function within a function and we r using the argument that was pass in the previous function
// here the sum function is called reccursiively untill we get the output of 10

//PROTOTYPAL INHERITANCE

// const arr=['Disha','Debdip']

// when we r writting the name of the oject or the array inn the console of out web browser , the object or the array is getting accessed to all it's respective function even tho we haven't defined any of the function, this is called prototye
// proto (typically an object) is the place where the javascript is storing all the necessary arguments that are present for an array or orject of even a function (arr._proto_)
//__proto__ has also has it's own prototype (__proto__.__proto__)
//__proto__.__proto__.__proto__ = null (this is the end of the chain)

// const obj={
//     name:"Debdip",
//     age:19,
// }

// const obj2={
//     name:"Disha",
// }

// obj2.__proto__=obj
// obj2.age // 19

// the cconsole first check for the age in the obj2 but sincee the __proto__ of obj2 is obj , adn since it doesn't find the age in the obj2 , it will go to the obj and show 19, but if we try to print the name of the obj2 it will the original name of the obj2 ie Disha and not Debdip

//Problem 1

//Input: [1,1,2,3,4,4,5,6,6,6]

// const func=(arr)=>{
//     let obj={}

//     for (let i=0;i<arr.length;i++){
//       if(obj[arr[i]]){
//           obj[arr[i]]++
//       }else{
//           obj[arr[i]]=1
//       }
//     }
//     return obj
//     }

//     const answer=func([1,1,2,3,4,4,5,6,6,6])
//     console.log(answer)

//Problem2

//Input: const inputObj1 = [
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 1",
//     data: "Data1",
//   },
//   {
//     key: "Sample 2",
//     data: "Data1",
//   },
//   {
//     key: "Sample 2",
//     data: "Data1",
//   },
//   {
//     key: "Sample 3",
//     data: "Data1",
//   },
//   {
//     key: "Sample 4",
//     data: "Data1",
//   },
// ];

//Output:
// {
//     'Sample 1': [
//       { key: 'Sample 1', data: 'Data1' },
//       { key: 'Sample 1', data: 'Data1' },
//       { key: 'Sample 1', data: 'Data1' }
//     ],
//     'Sample 2': [
//       { key: 'Sample 2', data: 'Data1' },
//       { key: 'Sample 2', data: 'Data1' }
//     ],
//     'Sample 3': [ { key: 'Sample 3', data: 'Data1' } ],
//     'Sample 4': [ { key: 'Sample 4', data: 'Data1' } ]

// const problem = (inputObj)=>{
//     let obj={}
//     for(let i=0;i<inputObj.length;i++){
//         if(obj[inputObj[i].key]){
//          obj[inputObj[i].key].push(inputObj[i])
//         }else{
//             obj[inputObj[i].key]=[inputObj[i]]
//         }
//     }
//     return obj
// }
// const result = problem(inputObj1)
// console.log(result)

// const arr = [1, 2, 3, [4, 5]];
// const problem = (array) => {
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < array.length; i++) {
//     arr1 = array[i];
//     for (let j = 0; j, arr1.length; j++) {
//       arr2 = arr1[i];
//     }
//   }
//   return arr2;
// };

// const result = problem(arr);
// console.log(result);

// AJAX
// Javascript works in two phases , the first phase is called the memory creation phase , where the javascript runs through the whole program and allocate memory to the different variables and constants , but the value of the vartiables is stored aas undefined, and the function are stored as the whole code , biut in the next phase that is the execution context phase the javascripot runs through the whole file again and now it allocates the values to the variables and functions
//return : return the value of the function to the place where the function was called, as soon as we return the value the whole execution context is deleted
//Call stack maintains the order of execution in the execution context

//HOISTING : a phenomenon is javascript where we can access the value of a variable even before it is initialization, without any error

//Problem 3

// const x=7
// function getName(){
//   console.log('Debdip')
// }

// getName()
// console.log(x)

// getName()
// console.log(x)
// var x=7
// function getName(){
//   console.log('Debdip')
// }

//here when we call the value of x before initializing it , we will get get undefined, bcoz js have already created the memory for x but the value of x is stored as undefined , so when we call the x , we will get undefined
// similary if we call the function , we will get the whole function as our answer , but here if the function is a arrow function then error will be shown, bcoz the arrow function acts just like another variable
// hoisting is not possible with the let and const becoz of the temporal dead zone, in case of var it is defined with a default value that is undefined , but in case of let and const it is defined without a predefined default value ie undefined, that is why it's throw a referral error.
//this is called temporal dead zone

//PROBLEM

//function getname1(){} : funciton
// var getname2 =()=>{} : variable
// var getname3 = function(){} : variable

//FUNCTION INVOCATION AND VARIABLE ENVIRONMENT

//output: 10 100 1

// var x=1;
// getValue2()
// getValue()
// console.log(x)

// function getValue(){
//   var x=10
//   console.log(x)
// }
// function getValue2(){
//   var x=100
//   console.log(x)
// }

//SHORTEST JAVASCRIPT PROGRAM IE THE EMPTY FILE

//javascripts creates a window, an object that is given us by the javascript engine, also creates a "this" keyword
//the object that is created is called the global object and this global object is created with the global execution context
//chrome : v8 engine (javascript engine)
//global space: any code that we write in javascript that is not present within a function

// var a=10
// function b(){
//   var x=100
// }
// console.log(window.x)

// here we can print the value of a and b function but we cannot print the value of x as a and the function will fall in the global space but x will not fall in the global space, and thus the value of x will be undefined

//UNDEFINED VS NOT DEFINED

//OUTPUT: 10 false
//when we r just declaring a without giving it any value we are creating a global space for a but not assigning any value to it so wehn we console.log the value of a it is showing as undefined (which was the predefined value of a) but when we r defining the value of a as 10 we r assigning a value to a thus the value of a now changes from undefined to 10

// var a;
// a=10
// console.log(a)
// if(a===undefined)
//     console.log("true")
// else
//     console.log("false")

//Javascript is a loosely typed language that is it does not attaches any of the variables to any specific datatype that is we can write var with string or array as well

// var a;
// console.log(a)
// a=10
// console.log(a)
// a="Hello world"
// console.log(a) //perfectly fined javascript code

//SCOPE CHAINS , SCOPS AND LEXICAL ENVIRONMENT

// function a(){
//    console.log(b)  //output: 10 , the function a can get acess to b that was declared in the global space , as the function a() will first look for the value in the local memory space ie within the function but when it will not find the functon within the local memory space it will get acess to the global space and thus will print the value 10
// }
// var b=10
// a()

// var y=1000
// function a(){
// var b=10
//     c()
//     function c(){    //closure
//         var x=100
//         console.log(b)
//         console.log(x)
//         console.log(y)
//         console.log(d) //null
//     }
// }
// a()

// we can access the variable that is present in the global space within any function but we cannot get acess to the variable that is specified in the local space in the global space , it will throw a error

//SCOPE: where we can access a specific variable or a function
//LEXICAL ENVIRONEMT: local memory of a function along with the local memory ( lexical enivroment ) of it's parent function
//LEXICAL : heirerchy or sequence
//the memory space of a function not only have access to the memory of it's own that contains the function and variables but also to the memory of it's parent , which again have access to it's parent and so on
//SCOPE CHAIN: the way of finding the variables using the lexical environment

//VAR VS LET AND CONST WITH RESPECT TO  HOISTING

// console.log(b) //undefined
// console.log(a) // we will get a error (referenceError), saying we cannot access a before initialization
// let a=10
// var b=100

// before even running the code memory spaces will be alocated to both a and b , thus let and const will show hoisting , but the difference is that b's memory space is assigned to the gobal scope while the a's memory space is aloocated in space other than the golbal space , as a result we will get an error while we try to acess the a but not while we try to acess b
//TEMPORAL DEAD ZONE: the time between when the value of a is hoisted till when the value of a is assigned
//when we try to acess a variable that is present in the temporal dead zone then we get a REFERRENCE ERROR
//window.b will work but window.a will not work as the value of a is stored in a seperate space and not on the window object
//we cannot duplicate var,let or const, if we try to duplicate let then we will get a SYNTAX ERROR
//let is strict compared to var
//javascript will not excute a single line of code if it sees reduplication or redeclaration of var,let or const
//const is even more strict than let

// let a;
// a=10 //this is possible

// const b;
// b=1000 //this is not possible, we cannot declare the value of a const later in the program
//if we try to redeclare the value of a const thn we get a SYNTAX ERROR

// const b=1000;
// b=100 //TYPE ERROR

//WHAT SHOULD WE USE
//1.CONST
//2.LET
//3.VAR

//BLOCK SCOPE AND SHADOWING IN JAVASCRIPT

// {
//Compound statement
// var a=10
// console.log(a)
// }

// this is a block in javascript, which is used to combine multiple lines of code into one statement, we can use it in a place where there are multiple lines of code but the javascript only expected a single line of code

//EXAMPLE

// if(true){
//     var a=10
//     console.log(a)
// }

//BLOCK SCOPE
// b and c is hoisted in a seperate space (in case of this block), this seperate space is the BLOCK, while a is hoisted in the GEC
//LET AND CONST ARE BLOCKED SCOPED
// let and const cannot be accessed outside this block

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a) //10
//   console.log(b) //20
//   console.log(c) //30
// }
// console.log(a) //10
// console.log(b) //ReferenceError: b is not defined
// console.log(c) ReferenceError: c is not defined

// let a =20
// {
//     var a =30  //SyntaxError: Identifier 'a' has already been declared
// }

// this is known as illegal shadowing
// but we can shadow a let using a let or a const using a const but not a let with a var or const with a var

//CLOSURES (lexical environment)

// function x(){
//     var a=7
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

//What is a closure ? (A function that is bind together with it's lexical environment)

//MAIN EXAMPLE OF CLOSURE

// function x(){
//     var a=7
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z=x() // the original value of x has vanished and the function y() nnow resides within z, that is why when we call z we get the function y and not x
// console.log(z)
// z()

// function x(){
//     var a=10
//     function y(){
//         console.log(a) // console.log of a will not point to the value of a , instead it will point the memory referrence of a , where the value of a is stored
//     }
//     a=100 // this line of code will change the value of a
//     return y
// }

// var z=x()
// console.log(z)
// z() //100

// function z(){
//     var b=900
//     function x(){
//         var a=7
//         function y(){
//             console.log(a,b)
//         }
//         y()
//     }
//     x()
// }
// z()

//USES OF CLOSURE
//1. MODULE DESIGN PATTERN
//2. CURRYING
//3. FUNCTION LIKE ONCE
//4. MEMOIZE
//5. MAINTAINING STATE IN ASYNC WORLD
//6. SETTIMEOUTS
//7. ITERATORS

//SETTIMEOUT AND CLOSURES

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i)
//     },3000)
//     console.log("Namaste Javascript")
// }
// x()

//javascript stores the callback function in some place and process with the rest of the code , and after the specific time it puts the callback function in the callstack and proceeds with the code

// function x(){
//   for(var i=0;i<=10;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
//   }
// }
// x()

//this code will not print 0 1 2...... but it will print 11 11 11...... , this is bcoz of shadowing , the value of var in changed to 10 in i<=10
//but if we use let in place of var , the output will be 0 1 2.....

//CORRECT CODE (with let)

// function x(){
//   for(let i=0;i<=10;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
//   }
// }
// x()

// in var the function donot point to the value of the var , instead it points to the reference of var (that is where it is stored) , but in case of let new value of i is stored everytime, it points to the value of i , not to it's reference
// let is blocked scoped , it creates a new copy of i every time the loop is executed

//CORRECT CODE (with let)

// function x(){
//     for(var i=0;i<=10;i++){
//         function closure(i){
//             setTimeout(() => {
//                 console.log(i)
//             }, i*1000);
//         }
//         closure(i) //we just have to provide the function with a new value of i everytime the loop executes
//     }
// }
// x()

//THIS

//this keyword works differently in strict mode and non-strict mode
//JAVASCRIPT RUNTIME ENVIRONMENT
//( window.alert() works bcoz of the browser runtime environment, the method is defined in the browser and any program that is executed in the browser will have acess to the window.alert() method )

// console.log(this) this == window object, global object (NODEJS)

// "use strict"
// function x(){
//     console.log(this)
// }
// x()

//when we use this keyword in the global space it doesnot depends on the strict or nonstrict mode, it will always return window object
//when we use the this keyword within the function , it will depend on the strict or nonstrict mode, in nonstrict more it will return window object but in strict mode it will return undefined

//THIS SUBSTITUTION
//if the value of this keyword is  undefined or null then javascript will replace the this keyword with globalObject only in the nonstrict mode

//the value of this keyword depends on how the function is called

// "use strict"
// function x(){
//     console.log(this)
// }
// x()  //undefined (when we call the function without any referrence of an object)
//window.x()   //globalObject (when we call it with referrence to the window object)

//DIFFERENCE BETWEEN FUNCTION AND METHOD

// const obj={
//     a:10,
//     x:function(){         // when a function is written within an object then it is no longer a function it becomes a method
//         console.log(this.x)  //returns the value or the function present in the object
//     }
// }

// obj.x()   //returns the object itself, thus the value of this keyword is the object itself

// const student={
//     name:"Akshay",
//     printName:function(){
//         console.log(this.name)
//     }
// }

// student.printName()

// const student2={
//     name:"Deepika",
// }

// student.printName.call(student2) // call method will take the value of this keyword , here by passing the student2 as parameter the value of this is now replaced by the obj student2

//Problem 3
// const nums=[1,1,1,2,2,3,4,4,5]

// const arrToObj=(arr)=>{
// let obj={}
// for(let i=0;i<arr.length;i++){
// if(obj[arr[i]]){
//     obj[arr[i]] += 1
// }else{
//     obj[arr[i]]=1
// }
// // console.log(obj)
// }
// return obj
// }

// const output= arrToObj(nums)
// console.log(output)

//Output

// const output= {
//     1:3,
//     2:2,
//     3:1,
//     4:2,
//     5:1
//  }

//trim
//split
//substring

// var isValid = function(s) {

//     if(s.length==0 || s.length==1){
//         return false
//     }
//     const objDetail=[]
//     let last=""
//     let output=true

// s.split("").forEach(el=>{

//     if(el=="("){
//         objDetail.push("first")
//     }else if(el=="{"){
//         objDetail.push("second")
//     }else if(el=="["){
//         objDetail.push("third")
//     }else if(el==")"){
//         last=objDetail.pop()
//         if(last!="first"){
//             output= false

// let stack = [];
//     for (let c of s) {
//         if (c === '(' || c === '{' || c === '[') {
//             stack.push(c);
//         } else {
//             if (!stack.length ||
//                 (c === ')' && stack[stack.length - 1] !== '(') ||
//                 (c === '}' && stack[stack.length - 1] !== '{') ||
//                 (c === ']' && stack[stack.length - 1] !== '[')) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return !stack.length;

// var removeElement = function(nums, val) {
//     let i=0;                                       //nums[i] points to the first element of the array
//     for(let j=0;j<nums.length;j++){               //j will iterate through the whole array
//      if(nums[j]!=val){                           //if the nums[j] is not equal to the val given
//          nums[i]=nums[j]                        // change the first element of the array to the nums[j]
//          i++                                   // and increase the value of i
//      }
//     }
//     return i                                //return the count that is i
//  };

// let nums =[3,5,7,9,10]
// target=8
// let sorted_array = []
//     if (nums.includes(target) == true) {
//         console.log(nums.indexOf(target))
//     } else {
//         nums.push(target)
//         sorted_array = nums.sort((a,b)=>a-b)  // sort function takes a callback functiion, here it comapares the values of a and b , and perform a-b , if it is negetive then b is greater than a and if it is positive then a is greater than b and if it is zero then there is no change in the order of a and b
//         // console.log(sorted_array)
//         console.log(sorted_array.indexOf(target))
//     }

//Convert a decimal to binary number and a binary number to decimal number

// var addBinary = function(a, b) {
//     const output=BigInt('0b'+a)+BigInt('0b'+b) //BigInt has no limit unlike parseInt
//     return output.toString(2)
// };

//Boyer Moore Majority Voting Algorithm

// var count = 0, candidate = -1;

//     // Finding majority candidate
//     for (var index = 0; index < nums.length; index++) {
//       if (count == 0) {
//         candidate = nums[index];
//         count = 1;
//       }
//       else {
//         if (nums[index] == candidate)
//           count++;
//         else
//           count--;
//       }
//     }

//     // Checking if majority candidate occurs more than
//     // n/2 times
//     count = 0;
//     for (var index = 0; index < nums.length; index++) {
//       if (nums[index] == candidate)
//         count++;
//     }
//     if (count > (nums.length / 2))
//       return candidate;
//     return -1;

//hashmap

//Function Statement aka Function Declaration

// function a(){
//     console.log('a is called')
// }
// a()
//this way of creating a function is called function statement

//Function Expression

// var b=function(){
//     console.log('function is called')
// }
// b()
//this way of creating a function is called function expression

//the major difference between function statement and function expression is HOISTING
//if we call both the function before it is created then a will be executed but b will throw a typeerror becoz memory of a will be created even before the function is called in the global spcae but for b it will be treated as a normal variable

//Anonymous Function
//function without a name is called anonymous function

// function (){
// } //but this is wrong syntax , and it will throw syntax error , as function statements should always have a name

//anonymous functions are used where functions are treated as values, that is we can assign anonymous function to a variable, just like in Function Expression

//Named Function Expression
//Function expression but the anonymous function in function expression have a name

// var b=function xyz(){
//     console.log('Hello World')
// }
// b()
// xyz() //xyz() is not defined //Famous output question

//BINARY SEARCH

// const arr=[11, 22, 33, 44, 55]
// const k=4
// let index=-1
// let low=0
// let high=arr.length-1
// // console.log(low,high)
// while(low<=high){
//     let mid = Math.floor(low + (high - low) / 2);
//     if(k==arr[mid]){
//         index=mid;
//         break
//     }else if ( k< arr[mid]){
//         high=mid-1
//     }else{
//         low=mid+1
//     }
// }
// console.log(index)

// const arr = [1, 2, 3, 4, 5];
// const d = 2;
// for (let i = 1; i <= d; i++) {
//   arr.push(arr.shift());
// }
// console.log(arr);

// ================================================================================================================

// Destructuring function

// const data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: "El señor de los anillos",
//       chinese: "魔戒",
//       french: "Le Seigneur des anneaux",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.52,
//         ratingsCount: 630994,
//         reviewsCount: 13417,
//       },
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "The Cyberiad",
//     publicationDate: "1965-01-01",
//     author: "Stanislaw Lem",
//     genres: [
//       "science fiction",
//       "humor",
//       "speculative fiction",
//       "short stories",
//       "fantasy",
//     ],
//     hasMovieAdaptation: false,
//     pages: 295,
//     translations: {},
//     reviews: {
//       goodreads: {
//         rating: 4.16,
//         ratingsCount: 11663,
//         reviewsCount: 812,
//       },
//       librarything: {
//         rating: 4.13,
//         ratingsCount: 2434,
//         reviewsCount: 0,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "Dune",
//     publicationDate: "1965-01-01",
//     author: "Frank Herbert",
//     genres: ["science fiction", "novel", "adventure"],
//     hasMovieAdaptation: false,
//     pages: 658,
//     translations: {
//       spanish: "",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.25,
//         ratingsCount: 1142893,
//         reviewsCount: 49701,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J. K. Rowling",
//     genres: ["fantasy", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 223,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       korean: "해리 포터와 마법사의 돌",
//       bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//       portuguese: "Harry Potter e a Pedra Filosofal",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 8910059,
//         reviewsCount: 140625,
//       },
//       librarything: {
//         rating: 4.29,
//         ratingsCount: 120941,
//         reviewsCount: 1960,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "A Game of Thrones",
//     publicationDate: "1996-08-01",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: "왕좌의 게임",
//       polish: "Gra o tron",
//       portuguese: "A Guerra dos Tronos",
//       spanish: "Juego de tronos",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 2295233,
//         reviewsCount: 59058,
//       },
//       librarything: {
//         rating: 4.36,
//         ratingsCount: 38358,
//         reviewsCount: 1095,
//       },
//     },
//   },
// ];

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// const book = getBook(3);
// const title=book.title
// title
// const author=book.author
// author

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// const primaryGenres = genres[0];
// const secondaryGenres = genres[1];
// primaryGenres;
// secondaryGenres;

// const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
// console.log(primaryGenres, secondaryGenres, otherGenres);

// const newArray = [...genres, "epic fantasy"];
// console.log(newArray);

// const updatedBook = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",
//   // Changing an existing property
//   pages: 1230,
// };
// updatedBook;

// Template literals

// const summary = `${title} is written by ${author} and have ${pages} pages and was published in ${
//   publicationDate.split("-")[0]
// }`;
// console.log(summary);

// Ternary operators

// const pageCount = pages > 1000 ? "over a thousand" : "less than a thousand";
// console.log(pageCount);

// const summary = `The book ${
//   hasMovieAdaptation ? "have" : "have not"
// } been adapted into a movie.`;
// console.log(summary);

// Optional chaining operators

// const getTotalReviewCount = (book) => {
//   const goodRead = book?.reviews?.goodreads?.reviewsCount ?? 0;
//   const libraryRead = book?.reviews?.librarything?.reviewsCount ?? 0;
//   return goodRead + libraryRead;
// };
// console.log(getTotalReviewCount(book));

//FIlter

// const books = getBooks();
// // const longBooks = books
// //   .filter((book) => book.pages > 500)
// //   .filter((book) => book.hasMovieAdaptation);
// // console.log(longBooks);
// const adventureBook = books
//   .filter((book) => book.genres.includes("fantasy"))
//   .map((book) => book.title);
// console.log(adventureBook);

// Reduce

// const books = getBooks();
// const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(totalPages);

// Sort

// const array = [3, 1, 2, 5, 6];
// const sorted_array = array.slice().sort((a, b) => b - a);
// console.log(sorted_array);
// console.log(array);
// const sortbookbyPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortbookbyPages);

// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// //Adding new book to the book list
// const booksAfterAdding = [...books, newBook];
// console.log(booksAfterAdding);

// //Deleting an existing book

// const booktoDelete = booksAfterAdding.filter((book) => book.id !== 6);
// console.log(booktoDelete);

// //Updating an existing book

// const booksAfterUpdating = booktoDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1240 } : book
// );
// console.log(booksAfterUpdating);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();

//infinite currying

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// merge two strings alternatively

// function mergeAlternatively(str1, str2) {
//   let result = [];
//   for (let i = 0; i < str1.length + str2.length; i++) {
//     if (i < str1.length) {
//       result.push(str1[i]);
//     }
//     if (i < str2.length) {
//       result.push(str2[i])
//     }
//   }
//   return result.join('');
// }

// console.log(mergeAlternatively("Debdip", "Bhattacharya"));

// const a = {
//   age: 19,
//   name: "Debdip",
// };

// const newObj = { ...a, dish: "biriyani" };

// console.log(newObj.age, newObj.name, newObj.dish);

//event loops

// console.log("start");

// setTimeout(() => {
//   function cbF() {
//     console.log("callback function");
//   }
//   cbF();
// }, 1000);

// new Promise((resolve, reject) => {
//   resolve("Promise resolved");
// })
//   .then((data) => {
//     console.log("data fetched from promise", data);
//   })
//   .catch((err) => {
//     reject("Error in promise", err);
//   });

// console.log("end");

//Event Delegation in javascript

// document.getElementById("parent").addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     console.log("Button clicked", event.target.innerText);
//   }
// });

// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis());

// const obj3 = {
//   __proto__: obj1,
//   name: "obj3",
// };
// console.log(obj1.name);

// const obj4 = {
//   name: "obj4",
//   getThis() {
//     return this;
//   },
// };

// const obj5 = { name: "obj5" };

// obj5.getThis = obj4.getThis;
// console.log(obj5.getThis());

//printing numbers from 1 to n using recursion
// const printNumber = (n) => {
//   const helper = (i) => {
//     if (i > n) return;
//     console.log(i);
//     helper(i + 1);
//   };
//   helper(1);
// };

// printNumber(5);

//printing sum of numbers from 1 to n using recursion
// const numbersSum = (n) => {
//   let sum = 0;
//   const helper = (i) => {
//     if (i > n) return 0;
//     return i + helper(i + 1);
//   };
//   sum = helper(1);
//   console.log(sum);
// };

// numbersSum(5);

// Linear Search using recursion
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = 5;

// const linearSearch = (arr, index, num) => {
//   if (arr[index] === num) console.log(index + 1);
//   else if (index == -1) console.log("Not Found");
//   else {
//     linearSearch(arr, index + 1, num);
//   }
// };
// linearSearch(arr, 0, num);

//maximum and minimum from the array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maxelement = arr.sort((a, b) => b - a)[0];
// console.log(maxelement);

// let maxelement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxelement) {
//     maxelement = arr[i];
//   }
// }
// console.log(maxelement);

//minimum element
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const minelement = arr.sort((a, b) => a - b)[0];
// console.log(minelement);

// let minelement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < minelement) {
//     minelement = arr[i];
//   }
// }
// console.log(minelement);

//find the frequency of character in a string
// const str = "debdip";
// const frequency = (str) => {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (obj[char]) {
//       obj[char] += 1;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   console.log(obj);
//   console.log(obj.d);
// };

// frequency(str);

//remove duplicates from an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
// const removeDuplicates = (arr) => {
//   const obj = {};
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = true;
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// };

// removeDuplicates(arr);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.splice(1, 2, "debdip", "debangshi");
// console.log(array); // [1, 2, 3, 4, 5]

// 1st way of describing object
// const obj = {
//   name: "debangshi",
//   age: 22,
//   address: "kolkata",
// };

// obj.name = "debdip";
// obj.age = 44;
// console.log(obj);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr[0] = "debdip";
// console.log(arr);

// const arr = [1, "debdip", { name: "debangshi", age: 22 }, 4, 5, 6, 7, 8, 9, 10];
// arr[2].name = "debdip";
// console.log(arr);

//prototyping in js , where we want to share some methods within each other instead of writing the same code for each instance (mainly used the concept of inheritance)
// function car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// car.prototype.startEngine = function () {
//   console.log(`${this.make} ${this.model} engine started.`);
// };

// const myCar = new car("debdip", "hello");
// const anotherCar = new car("debangshi", "testing");

// anotherCar.startEngine();
// myCar.startEngine();

//concept of memoization
// function memoize(fn) {
//   const cache = {}; //declare the cache to store the result

//   return function (...args) {
//     const key = JSON.stringify(args); //convert the args to string to use it as a key

//     //check if the result is already in the cache
//     if (cache[key]) {
//       console.log("fetching from the cache");
//       return cache[key]; //if yes then return the result from the cache
//     } else {
//       console.log("recalculating the data");
//       const result = fn(...args);
//       cache[key] = result; //store the result in the cache
//       return result;
//     }
//   };
// }

// function add(a, b) {
//   return a + b;
// }

// const memoizedAdd = memoize(add);

// console.log(memoizedAdd(2, 3));
// console.log(memoizedAdd(4, 5));
// console.log(memoizedAdd(2, 3));

//concept of shadowing
// const x = 10;
// function hello() {
//   const x = 20;
//   console.log(x); //20
// }
// console.log(x);
// hello(); //20



