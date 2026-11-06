//?math methods and properties
//!built-in obejct which is provided by Javascript
//! 1]Math.abs(x)->absolute to nearest number for zero
console.log(Math.abs(-9))

//! 2]Math.Round(x)->round up to one or zero
console.log(Math.round(11.5))//.5 will falls back to previous number.

//! 3]Math.floor(x)->it will gonna round down only
console.log(Math.floor(-100.9))

//! 4]Math.ceil(x)-it will round up only.
console.log(Math.ceil(1.1))

//!  5]Math.sqrt(x)-it will give a squareroot of a number
console.log(Math.sqrt(196))

//! 6]Math.random(x)-it will give any random  decimal number's between zero and one.
console.log(Math.random())
console.log(Math.floor(Math.random()*6))+1
//formula:Math.random()*(max-min)+min
//1-20
console.log(Math.floor(Math.random()*20))+1
//Math.random()*(max-min)+min
console.log(Math.floor(Math.random()*(20-10)+10))