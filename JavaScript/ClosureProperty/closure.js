//!Closure Property
//? property in javascript i.e., when i have multiple nested functions or even a function inside a function
//? the inner most function can access the variables which is declared outside it's scope.
//? closure is a function with the memory of it's lexical scope.

//var
function f1 ()
{
        var a = 10;
    function f2()
    {
        console.log(a)
    }
    f2()
}
f1()
// //  console.log(a)
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
