//!function without parameter without return keyword

function fun(){
    let a=10;
    let b=20;
    let c=a+b;
    console.log(c)
    }
    fun()

//! function with parameters withoout return keyword

function func(a,b)
{
    console.log(a+b)
}
func(10,2)

//! function without parameter with return keyword

function fun1()
{
    let a=100
    let b=200
    return a+b
}
let c = fun1()
console.log(c)

//! function with parameter with return keyword

function fun2(a,b)
{
    return a+b
}
console.log(fun2(2,3))

//? Anonymous Function

let x =function() {
    let a=1000
    let b=2000
    let c=a+b
}
x()

//!nested Function

function outer()
{
    console.log("HI outer function")

    function inner()
    {
        console.log("Hi inner function")
    }
    inner()
}
outer()


//! Arrow function -ES6 version,modern  way to declare a function,Shortest Syntax.

//? 1.Multiple Parameter.

 let z=(a,b)=>
{
    console.log(a+b);
}
z(5,4);

let z1=(a,b)=>{
    return(a*b)
}

console.log(z1(2,3))

//! 2.Single ParaMeter
let sqr=x=>x*x
console.log(sqr(100))




let y= _ =>{
return `zero Parameter`
 //console.log("zero Parameter")

}
console.log(y())


//! Higher Order Function.
function greet(name,age)
{
console.log(`Hi ${name}`)
age()


}
// greet("John",function(){console.log("Arrow function as a callback")})
let demo=function(){
console.log("Anonymous Function")

}
greet("John",demo)

function Eligibility(age,id){
    
    if(age >18)
    {
        console.log(`You are eligible to vote at the ${age}`)
    }
    else
    {
        console.log(`You are not eligible to vote at the ${age}`)
    }
    id();



}


let voter_id=()=>
{
    console.log("You  having voter id ")
    
}
Eligibility(20,voter_id)

















