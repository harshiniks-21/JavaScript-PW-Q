//synchronous execution.
// let order
// function placeOrder()
// {
//     console.log("Order Pizza")
//     order="Pizza"
//     console.log("Order is Placed")

// }
// placeOrder()
// console.log(order)
//? output
// Order Pizza
// Order is Placed
// Pizza

//Asynchronous execution

// let order
// function placeOrder()
// {
//     console.log("Order Pizza")
//     setTimeout(()=>{order="Pizza"
//     },2000)
//     console.log("Order is Placed")

// }
// placeOrder()
// console.log(order)
// o/t
// Order Pizza
// Order is Placed
// undefined

// let order
function placeOrder(o)
{
    console.log("Order Pizza")
    setTimeout(()=>{order="Pizza"          
        o()
    },2000)
    console.log("Order is Placed")

}
placeOrder(pizzaorder)
function pizzaorder(){
console.log(order)
}


//? calling one function inside another function and inside another more function will create a pyramid like structure this is called call back hell.
//! promises is one of the way to handle asynchronous execution.





//!
// function login()
// {
//      return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Login completed")},1000);
//         })
    
// }
// function getProfile(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Profile received")},2000);
//     })
// }
// async function test()
// {
//     const loginResult=await login()
//     console.log(loginResult);
//       const ProfileResult=await getProfile()
//     console.log(ProfileResult);
// }
// test();