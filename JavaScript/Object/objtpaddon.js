//function which is written inside an object is called as Method.
//object literal way.
let empl1={
    name:"Harshini",
    empid:"EMP01",
    age:26,
    salary:"5lpa",
    work:function(){
        console.log("I will Finish assigned Work")

    },
    obj2:{
        wish:"Iam in tp"
    }
}
// console.log(empl1.name);
// empl1.work();
// empl1.age=27
// console.log(empl1.age);
// //delete empl1.age
// console.log(empl1.age);
// //array notation
// console.log(empl1["empid"])
//    console.log(empl1["obj2"]["wish"])
//    console.log(Object.keys(empl1))
//    console.log(Object.values(empl1))
//    console.log(Object.entries(empl1))

//iteration
//for-in is used to iterate over the keys in object
for( let keys in empl1)
{
    console.log(empl1[keys]);
}