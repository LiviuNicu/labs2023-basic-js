"use strict";

console.log(car);//hoisting
let car = 'Volovo'; // global scope
function myFunction() {
  //var ES5
  //let const ES6;
  var car = 'Ford'; // inner scope
  console.log(car);
  var car = 'Dacia';
  console.log(car);

  // if(true){
  //   let 
  // }
}

// function myFunction() {
//   car = 'dacia';
// }

myFunction();
console.log(car);
