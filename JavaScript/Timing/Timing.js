//!Asynchronous
//? Timing Functions
//? 1>setTimeOut
//? Used  to delay function
//! syntax: setTimeOut()=>{},timeout();

// setInterval(()=>{
// for(let count=1;count<=10;count++) {
//         console.log(count);
//     }
// }, 1000)
//?print 1-10 
// setInterval(() => {
// for (let count = 1; count <= 10; count++) {
// console.log(count);
// }
// },2000);



let count = 1;
let z=setInterval(()=>{
    console.log(count);
    count++
    if(count>10)
    {
        clearInterval(z)
    }
},4000)







