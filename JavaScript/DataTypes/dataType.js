//!Data types
//?determine the type of data
// //? primitive

//?number
//? string
//? boolean
//? null
//? undefined

// //? Non Primitive
//?function
//? array
//? object
// //! to check the data type of a value
// //? typeof()
// //! number
var a=10
var b=20.5
var c=-29
var d=-20.555
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(typeof(a))
console.log(typeof b)


// //!boolean:

console.log("----------")
var a=true
var b=false
var c="true"
console.log(typeof a)
console.log(typeof b)
console.log(typeof(c))

// //! null;
console.log("----------")
var n=null
// //? intentional absence of a value
console.log(typeof n)//object-ref-000
// // historic- bug -000
 // //! undefined :
 // //?decl but not init
 var u;
 console.log(u)//? undefined
 console.log(typeof u);

 //! string:
 //?store the text data
 //? letter,world,sentence
 //?'' "" ``
 var a='hi'
var b="Hello"
var c=`bye`
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

let name='Harshini'
let city="Tiptur"
let hobby=("i love JavaScript ")
console.log(hobby)
var msg="i'm from Tiptur"
console.log(msg) 

//?2 adv
//multi line string
//string interpolation

var msg = `i am from pune
i love music
i like to watch RRR`
console.log(msg);

console.log(name + city)
console.log(`my name is ${name} and i am from ${city}`)
//? ${}-Template literal ES6V feature
console.log(`my name is ${name} and am from ${city}`)