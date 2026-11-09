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
//     setTimeout(()=>{order="Pizza"},2000)
//     console.log("Order is Placed")

// }
// placeOrder()
// console.log(order)

//!
function login()
{
     return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Login completed")},1000);
        })
    
}
function getProfile(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Profile received")},2000);
    })
}
async function test()
{
    const loginResult=await login()
    console.log(loginResult);
      const ProfileResult=await getProfile()
    console.log(ProfileResult);
}
test();