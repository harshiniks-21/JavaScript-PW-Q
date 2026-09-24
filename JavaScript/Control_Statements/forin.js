//? Dot Condition is not work in For-In Loop.
//! for of  is used to iterate array
//!for in is used to iterate Object

let stu={
name:"John",
id:101,
age:25,
address:{
    city:"BGLR",
    PinCode:572201
}

}
for(let key in stu)
{
    if(typeof stu[key]==="object")
        for( let  keys in stu[key])
            console.log(stu[key][keys])
        else
            console.log(stu[key])
    // console.log(stu)
   //console.log(key)

}


// let stu={
// name:"John",
// id:101,
// age:25,
// address:{
//     city:"BGLR",
//     PinCode:572201
// }
// }
// for(let key in stu)
// {
//    if(typeof stu[key]==="object")
//     {
//         for(let childkey in stu[key])
//         {
//             console.log(stu[key][childkey]);
//         }
//     } 
//     else{
//         console.log(stu[key])
//     }
// }
// // let stu = {
// // name: "John",
// // id: 101,
// // age: 25,
// // address: {
// // city: "BGLR",
// // PinCode: 572201
// // }
// // }

// // for (let key in stu) {
// // if (typeof stu[key] === "object") {
// // for (let childkey in stu[key]) {
// // console.log(stu[key][childkey]);
// // }
// // } else {
// // console.log(stu[key]);
// // }
// // }






// let product={
//     productName: "Laptop",
//     brand:"HP",
//     Price:60000,
//     PRocessor:"intel i5",
//     delivery:{
//         date:"20-09-2026",
//         day:"sunday",
//         // Status:{
//         //     isDelivered :"true"
//         // }
//     },
//     Data:"yes"
//     };

// for( let prod in product)
// {
//     if(typeof product[prod]==="object")
    
//         for (let ChildProduct in product[prod]) 
            

//             if(typeof product[prod][ChildProduct]==="object")
            
//                 for( let nested in product[prod][ChildProduct])
//                     console.log(nested + "-" +  product[prod][ChildProduct][nested])
//                 else
//                     console.log(ChildProduct,"-",product[prod][ChildProduct] )
//     else 
//     console.log(prod,"-",product[prod]);
//     }



//     let employeee={
//         empname:"Harshini",
//         empId:100,
//         empdesignation:"QaEngineer",
//         empaddress:{                           //-> object
//             Place:"Banglore",
//             PinCode:572201,
//                 status:{
//                 is_working:true
//         }
//     }

//     };
//     for(let empp in employeee)
//         if(typeof employeee[empp]==="object")
//                 for(let emp1 in employeee[empp])

//                     if(typeof employeee[empp][emp1]==="object")
//                         for(let em in employeee[empp][emp1] )
//                             //if(typeof employeee[empp][emp1][em]==="object")
//                                // console.log(em,"-", employeee[empp][emp1])
//                     console.log(em, "-", employeee[empp][emp1][em]);

               
//                     else
//                     console.log(emp1, "-", employeee[empp][emp1]);
        
//         else 
//         console.log(empp, "-", employeee[empp]);