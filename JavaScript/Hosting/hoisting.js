//! Hoisting :
 //? Variable Hoisting
 //Moving the declaration of the variable to the top of the Scope
console.log(a)
 var a=100
 console.log(a)

 //? Internal code
 //var a;
 //console.log(a)
 //a=100

 //!let
//  console.log(name1)
//  let name1="smith"//ReferenceError: Cannot access 'name1' before initialization

 //Internal code
//  let name1;//? TDZ doesnot allow only decl with let and const
//  console.log(name1)
//  name1="smith"

//let
//  let person;
//  console.log(person)
//  person="John"
 
 //!const
//  console.log(person1)
// const person1="John"//ReferenceError: Cannot access 'person1' before initialization

// console.log(c)
// const  c=3000 //Cannot access 'c' before initialization


