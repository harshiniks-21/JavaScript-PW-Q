//!Closure Property
//? property in javascript i.e., when i have multiple nested functions or even a function inside a function
//? the inner most function can access the variables which is declared outside it's scope.
//? closure is a function with the memory of it's lexical scope.

//var
function f1 ()
{
        let a = 10;
    function f2()
    {
        console.log(a)
    }
   return f2
}
let f=f1()
f()
//console.log(a)//a is not defined since the variable is not visible to outside of the function f1 and f2.

// //let
// function f1 ()
// {
//         let b = 10;
//     function f2()
//     {
//         console.log(b)
//     }
//     f2()
// }
// f1()
//  console.log(b)

//let with return
// function f1 ()
// {
//         let c = 10;
//         let d=100;

//     function f2()
//     {
//         console.log(c)
//         console.log(d)
//     }
//      return f2
// }
// let z=f1()
// z()
