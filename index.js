
// 1.javascript console API
//  alert("this is an alert message")
//console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning")
// console.error("this is error")
//   console.clear()
//   2.ways to print in javascript
// document.write("this is document write")

/*
multi line comment 
*/

//3. javascript variables

var n1 = 23;
var n2 = 99;
//console.log(n1+n2);

var str1 = "This is a String";
var str2 = 'This is a string';

//objects
var marks =
{
    ravi: 34,
    shubham: 78,
    harry: 99.87
}
//console.log(marks);

var a = true;
var b = false;
//console.log(a,b);

//var und= undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

//At a very high level,there are two types of data types in javascript
//1. Primitive data types:undefined , null, number, string boolean,symbol
///2. Reference data types:Arrays and Objects

var arr = [2, 3, 5, 4];

//Arithmetic operators
// var a=100;
// var b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// var c=b;
// c+=2;
// c-=2;
// c=c*100;
// c=c/2;
// console.log(c);

//Logical operators

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)


// //logical not
// console.log(!false)
// console.log(!true)


//functions
// function avg(p1,p2)
// {
//     return p1*p2
// }
// c1=avg(2,3);
// c2=avg(5,7);
// console.log(c1);
// console.log(c2);


//Conditionals      ----Left out
//Loops             ----Left out
var arr = [1, 2, 3, 4, 5, 6, 7,8];
arr.forEach(function (element) {
    console.log(element);
}
)

// Let j=0;  //for temporary var , limited block level
// const a=0;
// a=a+1;

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do{
//             console.log(arr[j]);
//         j++;
    
// }
// while(j<arr.length);


//Break and continue   --Left over

//Array methods
// let myarr=["fan","camera",34,null,true];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("suresh");
// myarr.shift();
// const newLen=myarr.unshift("shashwat");
// console.log(newLen);
// console.log(myarr);



//String methods in javascript
let myLovelyString = "Shashwat is a bad bad boy Shashwat";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("bad"))
// console.log(myLovelyString.lastIndexOf("bad"))
// console.log(myLovelyString.slice(1,3))   //behaves like substring in java
d=myLovelyString.replace("Shashwat","Mohit");
console.log(d,myLovelyString);



// //Dates
 let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM manipulation
let elem=document.getElementById('click');
//console.log(elem);

let elemClass = document.getElementsByClassName("container")  //HTML collection

//console.log(elemClass);
//elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

tn=document.getElementsByTagName('button');
//console.log(tn);
tn=document.getElementsByTagName('div');
///console.log(tn);

createdElement=document.createElement('p');
createdElement.innerText="This is a created para";
tn[1].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText="This is bold";
tn[1].replaceChild(createdElement2,createdElement);
//removeChild(element);   // removes an element



//Selecting using Query
sel=document.querySelector('.container')
//console.log(sel);
sel=document.querySelectorAll('.container')
//console.log(sel);



//Events in jS   -------------------IMP START
function clicked(){
 console.log('The button was clicked');  
}
window.onload=function()
{
//console.log("The document was loaded");
}


// firstContainer.addEventListener('click',function()   //can directly apply on Ids
// {
//     document.querySelectorAll('.container')[0].innerHTML="<b>We have clicked</b>"
//     console.log("clicked on container");
// })

// firstContainer.addEventListener('mouseover',function()
// {
//     console.log("mouse on container");
// })

// firstContainer.addEventListener('mouseout',function()
// {
//     console.log("mouse out of container");
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function()
// {document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouse up when clicked on container");
// })
// firstContainer.addEventListener('mousedown',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
//     console.log("mouse down when clicked on container");
// })

//if we run this all then execution order will be down-->up-->click ...But why click is on last???




//Arrow Functions
// function summ(a,b){
// return a+b;
// }
summ=(a,b)=>{
    return a+b;
}

//Set Timeout and Set interval


logkaro= ()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval Fired</b>"
//    console.log("I am your log");
}
//setTimeout(logkaro, 2000);
//setInterval(logkaro, 2000);
clr = setTimeout(logkaro,5000)
//use clearInterval(clr)/clearTimeout to cancel setInterval/setTimeout

//Local Storage in js
// localStorage.setItem('name','shashwat')
// undefined
// localStorage
// Storage {lastCoupon: "", bestCoupon: "", someMoney: "some money", clickedRemove: "0", allCpnText: "", …}
// localStorage.clear()
// undefined
// localStorage.set
// undefined
// localStorage.setItem('name','shashwat')
// undefined
// localStorage
// Storage {name: "shashwat", length: 1}
// localStorage.getItem('name')
//localStorage.removeItem('name')
//localStorge.clear();


//JSON
// obj={name:"shashwat",length:1,a:{this:'tha"t'}}
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed=JSON.parse(`{"name":"shashwat","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Templates litrals-Backticks
// a=34;
// console.log(`this is my ${a}`)
