//!Function which is passed as an argument to an Another function is called as CallBack Function.
// function f1(a)
// {
//     console.log("I'm a parent function")
//     a();
// }
// function f2()
// {
//     console.log("I'm a child function")
// }
// f1(f2)
// //!calling order and execution order.
console.log("***********")
// function f3(b,c)
// {
    
//     console.log("I'm a parent function")
//     c();
//     b();
// }
// function f4()
// {
//     console.log("I'm a child function")
// }
// function f5()
// {
//     console.log("Okay")
// }

// f3(f4,f5)

//?calculation
// function add(x,y,cb1,cb2){
//     let a=x+y
//     cb1(x,y,cb2,a);

// }
// function sub(m,n,cb2,a)
// {
//     let b=m-n;
//     cb2(a,b)
//  }
// function res(a,b){
//     console.log(`${a}`)
//     console.log(`${b}`)
    
// }

// console.log(add(20,3,sub,res));

// function add(x,y)
// {
//    return x+y
// }

// console.log(add(2,3))


//!//?
// function add(x, y, cb1, cb2) {
//     let a = x + y;
//     cb1(x, y, cb2, a);
// }

// function sub(m, n, cb2, a) {
//     let b = m - n;
//     cb2(a, b);
// }

// function res(a, b) {
//     console.log(`Sum = ${a}`);
//     console.log(`Difference = ${b}`);
// }

// console.log(add(20, 3, sub, res));



// function add(x,y,cb1)
// {
//     let a=x+y
//      return cb1(x,y)

// }
// function sub(c,d,a)
// {
//     return c*d;
// }
// console.log(add(2,3,sub))








// function f1(a,b,c){
//     console.log(a+b)
//     c();

// }

// f1(2,3,()=>{
//     console.log("sum of two no's")
// })

function add(x,y,c,d)
{
    console.log(x+y);
    c();
    d();

}
add(2,3,function(){console.log("Hi am callback function")},()=>{console.log("Am CB2")})