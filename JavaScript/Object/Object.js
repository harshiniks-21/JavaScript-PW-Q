// //! objects :
// //? syntax : object literal way
// // let/const objectName = {
// //      Key : value ,
// //      Key : value ,
// //      Key : value ,
// // }

// //? create an object
// let student = {
//     name : "Smith",
//     id : 101,
//     course : "Playwright",
//     price : 100000,
//     isPresent : true,
//     skills : ["Javascript","Typescript","playwright"]
// }
 
//  console.log(student)
 
// // //! Access the values :
// // //? syntax1 : Dot notation 
// //objectName.keyname
// console.log(student.name) //? Smith
// console.log(student.id) //? 101
// console.log(student.course) //?  Playwright
// console.log(student.price) //? 100000
// console.log(student.isPresent) //? true
// console.log(student.skills) //? Javascript","Typescript","playwright"
// console.log(student.skills[0]) //? Javascript
// console.log(student.skills[1]) //? Typescript
// console.log(student.skills[2]) //? playwright

// // //? syntax2 : sqauare bracket notation
// // objectName["keyname"]
// let product ={
//     "Product Name" : "Sweater",
//     "Product-id" : "4567EDFGH",
//     "product-price" : 5500
// }

// console.log(student["id"])
// console.log(product["Product Name"])
// console.log(product["product-price"])
// console.log(product["Product-id"])

// //! Manipulations :
// //? 1) update
// //syntax : objectName.keyname = value
// console.log(student)
// student.name = "Allen"
// console.log(student)
// //change all the values 
// //? 2) add
// //syntax : objectName.keyname = value
// //add the city :
// student.city = "Banglore"
// console.log(student)
// //? 3) delete
// //syntax : delete objectname.keyname
// delete student.isPresent

// console.log(student)

// //! Task 1 :
// //? create an employee details 
// //? add, update , delete 
// let Employee = {
//     emp1 : {
//         name :"John",
//         id : 101,
//         salary : {
//             CTC : 500000,
//             actualSal : 400000 
//         },
//         desig : "Test Engineer",
//         adress : {
//             city : "Banglore",
//             pincode : 506798
//         }
//     },
//     emp2 : {
//         name :"John",
//         id : 101,
//         salary : {
//             CTC : 500000,
//             actualSal : 400000 
//         },
//         desig : "Test Engineer",
//         adress : {
//             city : "Banglore",
//             pincode : 506798
//         }
//     },
//     emp3 : {
//         name :"John",
//         id : 101,
//         salary : {
//             CTC : 500000,
//             actualSal : 400000 
//         },
//         desig : "Test Engineer",
//         adress : {
//             city : "Banglore",
//             pincode : 506798
//         }
//     },emp4 : {
//         name :"John",
//         id : 101,
//         salary : {
//             CTC : 500000,
//             actualSal : 400000 
//         },
//         desig : "Test Engineer",
//         adress : {
//             city : "Banglore",
//             pincode : 506798
//         }
//     },
//     emp5 : {
//         name :"John",
//         id : 101,
//         salary : {
//             CTC : 500000, 
//             actualSal : 400000 
//         },
//         desig : "Test Engineer",
//         adress : {
//             city : "Banglore",
//             pincode : 506798
//         }
//     }
// }
// console.log(Employee.emp1)

// let obj1 = {
//     name : "john",
//     name : "smith"
// }
// console.log(obj1.name)


// //! inbuilt methods :
// //! 1) Object.keys()
// //? It is used to get the keys of an object.
// //? syntax : Object.keys(objectName)
// //? returns array of keys
// console.log(Object.keys(student)) //? (6) ['name', 'id', 'course', 'price', 'isPresent', 'skills']

// //! 2) Object.values()
// //? It is used to get the values of an object.
// //? syntax : Object.keys(objectName)
// // //? returns array of values
// console.log(Object.values(student)) //? ['Smith', 101, 'Playwright', 100000, true, Array(3)]

// // //! 3) Object.seal()
// // //? Used to seal an object
// // //? if an object is sealed adding and deleting of properties is not possible
// // //? syntax : Object.seal(objectName)
// // //! eg :
// // Object.seal(student)
// // //? updating the values  is possible
// // student.isPresent = false
// // console.log(student)
// // //? adding the new properties is not possible
// // student.address = "Banglore"
// // console.log(student)
// // //? deleting the properties is not possible
// // delete student.skills
//  console.log(student)

// //! 4) Object.isSealed()
// //? It is used to check whether an object is sealed or not
// //? syntax : Object.isSeal(objectName)
//  console.log(Object.isSealed(student)) //? true

// // //! 5) Object.freeze()
// // //? Used to freeze an object
// // //? if an object is freezed ,we cannot add,update or delete the  properties .

// // //? syntax : Object.freeze(objectName)
// // Object.freeze(student)
// // //? updating the values  is not  possible
// // student.name = "Allen"
// // console.log(student)
// // //? adding the new properties is not possible
// // student.marks = 95
// // console.log(student)
// // //? deleting the properties is not possible
// // delete student.skills
// // console.log(student)
// // //! 6) Object.isFrozen()
// //? It is used to check whether an object is freezed or not
// //? syntax : Object.isForzen(objectName)
// //! eg:
// // console.log(Object.isFrozen(student)) // true
// //! 7) Object.preventExtensions() :
// //? It is used to prevent the extension of properties .
// //? if an object is applied with preventExtensions() ,adding new properties is not possible.
// // ? syntax : Object.preventExtensions(objectName)
// // //! eg :
// // // Object.preventExtensions(student)
// // //? updating the values is possible
// // // student.id= 102
// // // console.log(student)
// // // //? adding new properties is not possible
// // // student.city = "Banglore"
// // // console.log(student)
// // // //? deleting the properties is possible 
// // // delete student.skills
// // // console.log(student)

// // //! 8) Object.isExtensible()
// // //? It is used to check if an object can be added with the new properties
// // //? syntax : Object.isExtensible(objectName)
// // //? It return boolean values
// // //! eg :
// // // console.log(Object.isExtensible(student))
// // //! 9) Object.entries()
// // //? convert object to arrays 
// // // console.log(Object.entries(student))
// // //? returns the array with nested array present with key and value 


// //! 10) Object.fromEntries() 
// //? Arrays to object
// // //? eg :
// let studentDetails = [
//     ["name","John"],
//     ["id",101],
//     ["course","Javascript"]
// ]
// console.log(studentDetails) //? 
// console.log(Object.fromEntries(studentDetails))
// //? {name: 'John', id: 101, course: 'Javascript'}

// //! 11) Object.assign()
// //? It is used to merge the object.
// let obj11 = {
//     name : "john"
// }
// let obj2 = {
//     id : 101
// }
// // console.log(obj11.concat(obj2)) 
// // // //?  TypeError: obj1.concat is not a function
// //Object.assign(target,source)
// console.log(obj11) //? {name: 'john'}
// console.log(obj2) //? {id: 101}
// console.log(Object.assign(obj11,obj2))
// console.log(obj11) //? 
// console.log(obj2)

// // //? eg:
// // // let newObeject = {}
// // // console.log(Object.assign(newObeject ,obj1,obj2))

// // // console.log(obj1) //? {name: 'john'}
// // // console.log(obj2) //? {id: 101}
// // // console.log(newObeject) //? {name: 'john', id: 101}

// // //! 12) Object.hasOwn()
// // //? It is used to check if a particular property belong to an object or not
// // //? It returns boolean values
// // //? syntax :
// // // Object.hasOwn(Object,property)
// // // console.log(Object.hasOwn(student,"skills")) //? true
// // // console.log(Object.hasOwn(student,"marks")) //? false

// // //! methods in object (Behaviors)
// // //? methods : functions inside an object
// // //? syntax 1 : before ES6
// // let student1 = {
// //     name : "John",
// //     age : 23,
// //     greet : function(){
// //         console.log("Welcome")
// //     }
// // }
// // //? calling a method: objectName.method()
// // student.greet()
// // //? syntax 2 : method shorthand (ES6)
// // let student2 = {
// //     name : "Smith",
// //     age : 25,
    
// //     greet(){
// //         console.log("welcome")
// //     }
// // }
// // //? calling a method: objectName.method()
// // student.greet()

// let employee = {
//     ename : "Allen",
//     eid : 101 ,
//     isOnline : true,
//     skill : ["HTML","CSS","Javascript"],
//     sal : null,
//     greet : function (){
//         console.log("hello my name is ",this.ename)
//     },
//     //? method
//     display(){
//         console.log(`${this.ename} id is ${this.eid}`)
//     }
// }
// // //? syntax : objectName.methodName()
// // employee.greet()
// // employee.display()

// // //! constructor function :
// // //? constructor is special method 
// // syntax :
// function constructorName(parameter1,parameter2){
//     this.property1 = parameter1 ;
//     this.property2 = parameter2 ;
// }
// function Employee (ename,eid,sal){
//     this.ename = ename
//     this.eid = eid
//     this.sal= sal
//     this.display = function (){
//         console.log("Hello my name is ",this.ename)
//     }
// }

// let emp1 = new Employee("smith",101,5000)
// console.log(emp1) //? 
// emp1.display()
// let emp2 = new Employee("john",102,5500)
// console.log(emp2)
// emp2.display()
// let emp3 = new Employee("Allen",103,5600)
// console.log(emp3)
// emp3.display()
// let emp4 = new Employee("Raj",104,5700)
// console.log(emp4)
// emp4.display()

// console.log(emp1.hasOwn("display"))




let a = {name:"abc"}
b=a
console.log(a.name)
console.log(b.name)
b.name="bcd"
console.log(a.name)
console.log(b.name)