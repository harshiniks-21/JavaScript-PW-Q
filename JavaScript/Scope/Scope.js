// ! Scope
//var,let,const
//?Local Scope:A variable which is declared inside the Block and Function is called as Local Scope
//Block Scope
//! var:
// {
//     var a=10
//     console.log(a)//10
// }
// console.log(a) //10

//!let:
// {
//     let a=20
//     console.log(a) //20
// }
// console.log(a)//ReferenceError: a is not defined

//!const :
// {
//     const c=30
//     console.log(c) //
// }
// console.log(c) //ReferenceError: c is not defined

// var a=10
// {
//     var a=20
// }
// console.log(a)//20

// let a=20
// {
//     let a=10
// }
// console.log(a)   //20

//! global Scope

// var a="hi"
// let b=10
// const c=30
// {
//     var a="Hello"
//     let b=20
//     const c=40
//     console.log(a)//Hello
//     console.log(b)//20
//     console.log(c)//40
// }
// console.log(a)//Hello
// console.log(b)//10
// console.log(c)//30

// var a="hello"
// {
//     var a="Hi"
//     let b=100
//     const c=40
    
// }
// console.log(a)
// console.log(b)//ReferenceError: b is not defined
// console.log(c)//ReferenceError: c is not defined







