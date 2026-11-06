//collection of data
//! array literal syntax:
//let arra=[10,20,"Hi",true]
//console.log(arra)
//! array constructor
// let array1=new Array(10,"twenty",30)
//console.log(array1)
//? Using Array.of()
// let array2=Array.of("Ten",20,30)
// console.log(array2)
//console.log(typeof(array2))//object->bcz it is inherited by the prototype object itself
//! length
// console.log(array2.length)
// console.log(array2[0])

//? 1]toString
let ar=[1,2,3]
// let brr=(ar.toString())
// console.log(typeof(ar))
// console.log(typeof(brr))
// console.log(ar)

//? 2] join()
// console.log(ar.join())
//  let cr=ar.join()
// console.log(typeof(cr))

//? 3] push()->add an ele to end of an array & modifies the original array.
let p=[11,22,33]
let q=p.push(44,55,66)
// console.log(q)//it will return the length of array
// console.log(p)
//? 4]pop()
let r=p.pop()
console.log(r)
console.log(p)

//? 5]shift()
let t=[10,20,30]
t.shift()
console.log(t)

//? 6]unshift()
t.unshift(100)
console.log(t)
//? 7] concat
let m=[1,2,3,4]
let n=[5,6,7]
let o=[8,9]
console.log(m.concat(n,o))

//? 8]slice
let j=[0,8,9,4,5,3,9]
console.log(j.slice(2,4))
// console.log(j)

// //? 9] splice()->add,remove,replace an array elements
// //? syntax:array.splice(start index ,delete count,items to be added)
 let sply=[10,20,30,40,50,60,70,80,90,100]
 //sply.splice(2,0,24,28)

 console.log(sply.splice(0,sply.length))
 console.log(sply)


//? 9]sort()
let srt=["Apple","Banana","Custard apple","Orange","BlackBerry","Cherry","Guava"]
console.log(srt.sort());
let srt1=[1,9,8,6,0,40]
console.log(srt1.sort());//[ 0, 1, 40, 6, 8, 9 ]
//to over come the drawback of Sort method we will use Comparision Function
//! Comparision function:->
let comparision=(a,b)=>{ return a-b}
srt1.sort(comparision)
console.log(srt1)

//? 10]indexof()
let ltr=[10,20,30,40,50,40,70,40]
console.log(ltr.lastIndexOf(40))
//? 11]reverse()
console.log(ltr.reverse())


//! iteratiosn
//? for-each()-For each is an array method,it visits each of an array elements one by one.
let god=["Ram","Krish","Venkat","Prahaladha"]
god.forEach((element,index)=>{
    console.log(index,element);
})

//? map()->in map after performing the actions on the elements,the output will be returned as  a new array and it will not gonna affect the original array.
let nu=[11,22,9,10]
let z1=nu.map((no,index)=>{
    return no+5
})
console.log(z1)
//in the map method if we din't use a return keyword it will give undefined as an output.

//?reduce()-> it is used to execute an each and every element on an array. and we have to return it
//?array.reduce((accumulator,currentvalue,current index,array)=>{ },initial value)
let a1=[1,2,3,400]
let z2=a1.reduce((b1,c1)=>{return b1*c1})
console.log(z2)
