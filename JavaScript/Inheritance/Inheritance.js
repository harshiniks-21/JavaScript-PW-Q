//! Object Based
// let car={
//     Manufacturer:"TATA",
//     Colour:"White",
//     Seater:5,
//     Doors:5,
//     Call:function(){
// console.log("HI")
//     }
// }
// console.log(car.Manufacturer);

// let car2=Object.create(car)
// console.log(car2.Doors);
// car2.Seater="10"
// car.Call()
// console.log(car2.Seater)
// console.log(car.Seater)

//!Classes-ES6 release-2015.
//Inheritance:->
//this-to search the variable within the class scope.
// class Dog{
//       nameee="Danny"
//      static age=5
//      static Details()
//     {
//         console.log(`${this.nameee} is ${this.age} years old`)
//     }
// }
// class dogg extends Dog{
//     static  nameee="Tommy"



//      static print()
//     {
//         console.log(this.nameee);
//     }


// }
// dogg.Details()
// dogg.print()
// //!non static
// // let z=new dogg();
// // console.log(z.nameee)


//?how we can create static and non static properties and how can we access it outside the class
//? classname.variablename or classname.methodname for static
//? for non static we can ccess through the instance by using new key word.
//? we cannot use name property bcoz by default the name is a memory location where the class name  will get stored



class Application
{
    static naam="Amazon"
    static domain="E-Commerce"
    static Detailss(){

        console.log(`${this.naam} is an ${this.domain} Applicationn`)
    }
}
class Wishlist extends Application{
    static naam="Flipkart"
    static print()
    {
        console.log(this.naam)
    }
}
Wishlist.Detailss()
Wishlist.print()
