//! promises:
//? A promise in JS is an object that represents the eventual completion or failure of an asynchronous operations and it's resulting values
//? Future result of an application.
//? Ex:->api's,download,Uploaded.
//? it's a core feature of JS.

// launch the url
// let p= new Promise((res,rej)=>{
//     setTimeout(()=>{console.log("Launch the URL");
// res("Url is Launched")
// rej("404 error")


//     },2000)

// }).then((result)=>{console.log(result)
// }).catch((error)=>{console.log(error)})

// //log in page.
// let p2=new Promise((ress,rejj)=>{
//     setTimeout(()=>{console.log("Log-in")})
//     ress("Logged in")
//     rejj("Error encountered")
// }).then((result1)=>{
//     console.log(result1)
// }).catch((error1)=>{
//     console.log(error1)
// })
//! output
// Logged in
// Log-in
// Launch the URL
// Url is Launched
//since the p2 is executing first we should do promise chaining in order to avoid the above issue.

// p.then(()=>{
//     let p2=new Promise((ress,rejj)=>{
//     setTimeout(()=>{console.log("Log-in")})
//     ress("Logged in")
//     rejj("Error encountered")
// }).then((result1)=>{
//     console.log(result1)
// }).catch((error1)=>{
//     console.log(error1)
// })

// })
// let p3=new Promise((reso,reje)=>{
// console.log("Home page");
// reso("Home page is displayed");
// reje("Home page not found");



// }).then((resul)=>{console.log(resul)

// }).catch ((rejec)=>{console.log(rejec)})


// let p= new Promise((res,rej)=>{
//     setTimeout(()=>{console.log("Launch the URL");
// res("Url is Launched")
// rej("404 error")


//     },2000)

// }).then((res)=>{console.log(res)
// }).catch((rej)=>{console.log(rej)})


// let p3=new Promise((reso,rejec)=>{
// console.log("Home page");
// reso("Home page is displayed");
// rejec("Home page not found");

// }).then((reso)=>{return reso

// }).catch ((rejec)=>{return rejec})

// //!promise.all and promise.any-methods of promise
// Promise.all([p,p3]).then((reso)=>{
//     console.log(reso)
// }).catch((rejec)=>{
//     console.log(rejec)
// })
//! even promises are more complecated and tuff to debug.
//!to avoid it in 2017 async and awit came into picture.


let p=new Promise((res,rej)=>{
    let success=true
    if(success)
    {
        res("Task is Completed");
    }
    else{
       rej("Task isn't Completed");
    }
})
// p10.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
console.log(p)