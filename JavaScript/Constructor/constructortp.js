//! Constructor
//? It is a special type of method which is used to -
//? define the Properties and methods of Objects.

// function Bike(Model,colour,Yol)
// {
// this.Mode=Model;
// this.colour=colour;
// this.Yol=Yol;
// this.ride= function(){
//     console.log(`ride ${this.Mode}`);
// }
// }
// let RE=new Bike("Hunter","Grey",2023)
// RE.ride()
// let Sty=new Bike("Active","White",2022)
// Sty.ride()
// // let pul= new Bike("Pulser","Black",2020)
// console.log(RE);
// // console.log(Sty);
// // console.log(pul);
//! object creation through Classes
//! Classes
//?[ES-6]Feature provides a more Structured & Cleaner
//? Way to work with Objects compared to contructor Functions.
class Bike{
    constructor(model,colour,year){
        this.Model =model;
        this.col=colour;
        this.yr=year;
        
    }
    ride()
    {
        console.log("I'm riding")
    }
        }
 let b1=new Bike("Bugatti","White",1909)
 console.log(b1);
 b1.ride();