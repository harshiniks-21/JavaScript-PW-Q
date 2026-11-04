// //named function.
// function Person_name(nameee,age){
//     console.log(`My name is ${nameee}`)
//     console.log(`My age is ${age}`)
// }
// Person_name("Harshini",null)
// Person_name("Harshini",26)

// function add(a,b)
// {
//     console.log(a+b)
// }
// add(2,3)

// function even(z)
// {
//  if(z%2==0)
//  {
//     console.log(`${z} is even`)
//  }
//  else 
//  {
//     console.log(`${z} is not even `)
//  }
// }
// even(2)

// // not passing any arguments case.
// function evenn(z)
// {
//  if(z%2==0)
//  {
//     console.log(`${z} is even`)
//  }
//  else 
//  {
//     console.log(`${z} is not even `)
//  }
// }
// evenn()//undefined

// //Anonymous function
// let y=function(d,e){
//     console.log("HI")
//     return d+e;
// }
// console.log(y(10,20))// you can either print directly or you can store it in a variable and then u can print it.
//  let x=y(10,20)
//  console.log(x)
 

//  let u=function (wish,f,g)
//  {
//       console.log(wish)//10
//       console.log(f)//20
//       console.log(g)//undefined
//  }
//  u(10,20)

//  //default parameter assignment.
//  //in this case if we din't pass any argument also it will take default value as bglr but if we pass the argument it will take passed argument only. 
//  let u1=function (naam,age,loc="bglr")
//  {
//       console.log(naam)//10
//       console.log(age)//20
//       console.log(loc)//undefined
//       console.log(arguments);// in case of n no of arguments if we want to know what and all are the arguments if holds in that time we can use arguments word.
//  }
//  u1("Harshini",25,"Mysore")

//  //Arrow function
//  let i=(g,h)=>{
//    console.log(g+h)
//  }
//  i(100,200)


 //IIF/SIF
 (function multi(j,k)
 {
   console.log(j+k)
 })
 (7,8)
 //immediatly after declaring the function we should call it by second set of parameters but we should not use any extra statements in middle.
