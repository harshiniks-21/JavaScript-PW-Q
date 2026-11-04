//! call(),apply(),bind()-mostly used to borrow method from one object to another object.
//?these are the methods of Function thata  allow us to control the reference of of value or this keyword.

//function which is written inside an object is nothing but Method.

// let obj1=
// {
// FirstName:"Harshini",
// LastName:"KS",
// fullname:function(){
//     console.log(this.FirstName + this.LastName);// this keyword is going to refer obj1 object .
// }
// }
// let obj2=
// {
// FirstName:"Mickey",
// LastName:"Mouse",
// fullname:function(){
//     console.log(this.FirstName + this.LastName);// this keyword is going to refer obj1 object .
// }
// }
// // obj1.fullname();
// //borrowing a method  from one object to another.
// obj1.fullname.call(obj2);
// fullname.call(obj2)


//global variable
fullname=function(l,m){
    console.log(this.FirstName + this.LastName +l+ " "+ m);// this keyword is going to refer obj1 object .
}
let obj1=
{
FirstName:"Harshini",
LastName:"KS ",
}
let obj2=
{
FirstName:"Mickey",
LastName:"Mouse ",
}
// fullname.call(obj2,"Cartoon")
// fullname.call(obj1,"QA Engineer")

//!apply()
// Function.apply(thisArg: any, argArray?: any): any
// The object to be used as the this object.
// Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
// fullname.apply(obj1,["QaEngineer",12345])

//!binding()
let fun=fullname.bind(obj1,"Singer","hdfc")
fun()
console.log(fun)

