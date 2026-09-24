//! Destructuring 
//?Unpacking the data
//! Array
//Systax:let [v1,v2,v3..] = arrayname
let arr = [10,20,30,40,50]
//? unpacking ele :
// let [ten,twenty,thirty] = arr
// console.log(ten);
// console.log(twenty);
// console.log(thirty);

//? Skipping Elements
// let[ten,twenty,,,fifty] =arr
// console.log(ten)
// console.log(twenty);
// console.log(fifty);
  //! objects & nested Object.
  let stu ={
    name:"Harshini",
    id:101,
    sub: "JavaScript",
    address:
    {
        pin:572201,
        city:"bglr"
    }
  }

let{name,id,sub,address:{pin,city}}= stu
console.log(stu.name);
console.log(stu.id);
console.log(sub)
console.log(pin)
console.log(city)



//! functions :
//? without destructuring :
// function studentDetails (data){
//     console.log(data)
//     console.log(data.name)
//     console.log(data.id)
// }
// studentDetails(stu)


//? with destructuring :
// function studentdetails(name,id,sub)
// {
//     console.log(name)
//     console.log(id)
//     console.log(sub)
// }
// studentdetails(stu)

//!Rest Parameter : 
let students =["John","Smith","Allen","King","Raj"]
let [s1,s2,...others]= students
console.log(s1)
console.log(s2)
console.log(others[0])
console.log(others[1])
console.log(others[2])