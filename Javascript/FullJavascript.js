
/*
// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")
*/


/*
// 2. Javascript console API
 console.log("Hello World", 4 + 6, "Another log");
 console.warn("this is warning");
 console.error("This is an error");
*/
 /*var a=12;
var b=15;
console.log(a+b);
*/



/*
//DataTypes In java script

//number
var number1 =56;
var number2 =45;


//string
var str1="this is akash";
var str2=" and i love pizza";


console.log(str1)
console.log(str2);
console.log(number1*number2)

/// Booleans
var a = true;
var b = false;
 console.log(a, b);

 var und = undefined;
var und;
 console.log(und);

var n = null;
 console.log(n);

//At a very high level, there are two types of data types in JavaScript
//1. Primitive data types: undefined, null, number, string, boolean, symbol
//2. Reference data types: Arrays and Objects

//Objects
var marks={
    ravi: 89,
    akash: 50,
    shubham:78 
}
console.log(marks);
//Array
var arr = [1, 2, "bablu", 4, 5]
console.log(arr)
*/

/*
// Operators in JavaScript


// Arithmetic Operators
//var a = 100;
//var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);
*/

/*
// Conditionals in JavaScript

var age = 41;
//Single if statement
if(age > 18){
   console.log('You can drink rasna water');
 }
//if - else statement
if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}



age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/


/*
// Loops in java script
 var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function ak (element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
*/



/*
// Array in java script
 // let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);
*/

// String Methods in JavaScript
/*
let myLovelyString = "Harry is a good boy good good Harry";
 console.log(myLovelyString.length)
 console.log(myLovelyString.indexOf("good"))
 console.log(myLovelyString.lastIndexOf("good"))

 console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan");
 d = d.replace("good", "bad");
 console.log(d, myLovelyString)
*/
/*
//dates is javascript
 //let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
*/


/*
// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
//elemClass[0].classList.remove("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

/ console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
 
// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
*/




/*
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })
*/

/*
// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ=(a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>";
    console.log("I am your log");
}
*/



/*
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
*/



// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`)

//oops

/*

//changing prototype

//whenever a function is created the prototype property is added to that function automatically. 
//This property is a prototype object that holds a constructor property.
//ClassName.prototype.methodName  



 let a={
    name:"harry",
    age:25
 }
 console.log(a)
 let p={
    run:()=>{
        alert("aksh")
    }
 }
 p.__proto__={
    nam:"jackie"

 }
a.__proto__=p
a.run()
console.log(a.nam)
*/


