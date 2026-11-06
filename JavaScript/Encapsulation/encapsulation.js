//! Encapsulation:=>
//?wrapping up of data members into functional members to form a single unit.
//we can hide a data and control the  direct access to private data.
//?in JS # will play same role as a private keyword in java.
//if the variable is declared as private u should create a method and return it,if it is not a private variable then u can directly access it.
//? //! Overloading is not possible in javascript,bcz we are not going to pre define the datatype since js is dynamically typed language.
class Bank{
   #pin =1234
    #Balance=1000
    #Actno="KAR001"
    holder="Harshii"
    get Balance(){
        return this.#Balance
    }
    get pin(){
        return this.#pin
    }
    get Actno()
    {
        return this.#Actno
    }
    set setpin(val) //overriding
    {
        this.#pin=val
    }
}
let rf=new Bank()
console.log(rf.pin)
// console.log(rf.Balance)
// console.log(rf.Actno)
// console.log(rf.holder)
rf.setpin=4321
console.log(rf.pin)




