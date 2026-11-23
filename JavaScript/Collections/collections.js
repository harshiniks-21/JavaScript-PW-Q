//? Collections are of 3 types.
//! Array
//! Set
//! Map
//* // Array
// Allows duplicates ✅
//Maintains insertion order ✅
//Access by index ✅
let arr=[10,20,30]
console.log(arr[1])

//* // Set
//Stores unique values only.
//No duplicates ❌
//Maintains insertion order ✅
//No index access ❌
let a=[10,20,10,30,40,30]
let set= [new Set(a)]
console.log(set)

//* //Map
//?Stores data as key-value pairs.
//?Keys can be any datatype ✅
//?Maintains insertion order ✅
let map = new Map();

map.set("name", "Harshini");
map.set("age", 26);
console.log(map.get("name"));
