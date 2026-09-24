// //!Pass by Value
// let no=10
// console.log(no)
// let num=no
// console.log(num)
// num=num+30
// console.log(num)
// console.log(no)//it will not effect the existing variable.



// //!Pass by Value in var
// var no=100
// console.log(no)
// var num=no
//  console.log(num)
//  num=num+30
//  console.log(num)
//  console.log(no)


// //!Pass by reference
// let bottle={
//     colour:"Grey",
//     Shape:"Round"
// }
// console.log(bottle.colour)
// console.log(bottle.Shape)


// let SteelBottle=bottle;
// console.log(SteelBottle.colour)
// console.log(SteelBottle.Shape)
// SteelBottle.Shape="Box"
// console.log(SteelBottle.Shape)
// console.log(bottle.Shape)//changes done on second variable wil effect the first variable

// //Modification
// bottle.colour="White"
// console.log(bottle.colour)
// //add New Property
// bottle.price=50
// console.log(bottle.price)
// console.log(bottle)

// //? Methods of Object

// //? 1>Object.keys
// let bottleKeys= Object.keys(bottle)
// console.log(bottleKeys)
// //? 2> Object.Values
// let bottleValues= Object.values(bottle)
// console.log(bottleValues)
// //? 3> Object.Entries
// let bottleProperties= Object.entries(bottle)
// console.log(bottleProperties)



//?  4> freeze 
// let bottle = {
//     colour:"Black",
//     1:"One"
// };
// Object.freeze(bottle);
// console.log(Object.isFrozen(bottle))
// bottle.colour="White"
// bottle.capacity="two liters"
// delete bottle [1]
// console.log(bottle)

// let car = {
//      color: "red",
//      seater : 5,
//      brand : "Audi",
//      price : "1CR",
//      isAvailable : true,
//      colours : ["white","black","red"],
//      delivery : {
//         day : "Sunday",
//         date : "10-10-2000"
//      },
//      display : function ()
//      {
//         console.log("car is Delivered")
//      }
// }
// console.log(car.brand);

// function Car(color,brand)
// {
//     this.brand = brand;
//     this.color = color;
//     this.display = function()
//     {
//         console.log(this.brand,"car is delivered")
//     }
// }
// let c1=new Car("BMW","10CR")
// console.log(c1)
//  c1.display();
// let c2=new Car("Verna","12Lakhs")
// console.log(c2)
// c2.display();


// let student = {
//         name:"Harshini",
//         Id:100

// }
// console.log(student.name);
// console.log(student.Id);

function students(name,Id)
{
    this.name=name;
    this.Id=Id;

}


let s1=new students("Shalini","1000")
console.log(s1)
let s2=new students("Shal","10")
console.log(s2)