//var
// function f1 ()
// {
//         var a = 10;
//     function f2()
//     {
//         console.log(a)
//     }
//     f2()
// }
// f1()
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
function f1 ()
{
        var c = 10;
    function f2()
    {
        console.log(c)
    }
     return f2
}
let z=f1()
z()
