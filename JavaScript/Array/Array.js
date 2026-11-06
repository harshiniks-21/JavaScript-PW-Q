// // // //! Arrays:
// // let arr = []
// // console.log(arr)
// // console.log(typeof arr) // object

// // let arr1 = [10,20,30]
// // console.log(arr1)
// // console.log(arr1[0])
// // console.log(arr1[1])
// // console.log(arr1[2])
// // console.log(arr1[-1])
// // console.log(arr1[1])

// // // //? Length Property
// // // //? Syntax:arrayName.length
// // console.log(arr1.length)
 

// // let arr2 = [10,"Smith",true,null,[],()=>{}]
// // console.log(arr2[0])
// // console.log(arr2[1])
// // console.log(arr2[2])
// // console.log(arr2[3])
// // console.log(arr2[4])
// // console.log(arr2[5])

// //! Inbuild Methods in Array


//! 1> push()
// ? Add the Element at the last Index Position
// ?Syntax : array.push()
// ?Modifies original array
// ?larg--> element to be added
// ?returns the length of an array
let num4 = [10,20,30,40,50]
console.log(num4)
console.log(num4.push(60))
console.log(num4)
num4.push(70,80,90,100)
console.log(num4)


// // //! 2> pop()
// // //? Remove the Element at the last Index Position
// // //?Syntax : array.pop()
// // //?Modifies original array
// // //?no args
// // //?returns the Removed Array
// let num5 =[10,20,30,40]
// // console.log(num5)
// // console.log(num5.pop())
// // console.log(num5)


// // ! 3> shift()
// // //? Remove the Element at the First Index Position
// // //?Syntax : array.shift()
// // //?Modifies original array
// // //?no args
// // //?returns the removed Ele
// // console.log(num5.shift())
// // console.log(num5)


// // ! 4> unshift()
// // //? Adds the Element at the First Index Position
// // //?Syntax : array.unshift()
// // //?Modifies original array
// // //?larg-->Elements to be added.
// // //?returns the removed Ele
// console.log(num5.unshift(10,20,30,40,50))
// console.log(num5)

// //! 5. splice()
// // add, remove and replace the element
// // syntax: arrayname.splice(start index, delete count, items)
// // start index - value of index where to delete
// // delete count - how many elements to be deleted
// // items - to be added or replaced
// // modifies the original array
// // 3 args accepted - (start index, delete count, items)
// // returns the removed element

// let num3 = [2, 5, 7, 8, 9, 3];
// console.log(num3.splice(2, 3, "hello", "hi", "bye")); // (3) [7, 8, 9]
// console.log(num3); // (6) [2, 5, 'hello', 'hi', 'bye', 3]

// //! 6. concat()
// // merge two or more arrays
// // syntax: array1.concat(array2, items)
// // does not modify the original array
// // 2 args accepted - (arrays, items)
// // returns the new array

// let arr = [10, 30];
// let acc = [40, 50, 60];
// let array1 = arr.concat(acc, "hello", "hi");
// console.log(array1); // (9) [10, 30, 40, 50, 60, 10, 30, 'hello', 'hi']

// // 7. indexOf()
// // used to fetch the first occurrence of an element in an array
// // syntax: arrayname.indexOf(searchElement, startIndex(optional))
// // does not change the original array
// // 1 arg - (searchElement)
// // returns the index position

// let abc = ["a", "b", "b", "d", "c", "e", "c", "a", "e"];
// let res = abc.indexOf("c");
// console.log(res); // 4

// let res1 = abc.indexOf("e");
// console.log(res1); // 5

// let res2 = abc.indexOf("z");
// console.log(res2); // -1

// // 8. lastIndexOf()
// // used to fetch the last occurrence of an element in an array
// // syntax: arrayname.lastIndexOf(searchElement, startIndex(optional))
// // does not change the original array
// // returns the index position

// console.log(abc.lastIndexOf("a")); // 7
// console.log(abc.lastIndexOf("z")); // -1
// console.log(abc.lastIndexOf()); // -1

// // 9. includes()
// // used to check if elements are present or not
// // syntax: arrayname.includes(searchElement)
// // does not modify the original array
// // returns boolean value

// console.log(abc.includes("a")); // true
// console.log(abc.includes("z")); // false
// console.log(abc.includes()); // false

// //! 10. reverse()
// // used to reverse array elements
// // syntax: arrayname.reverse()
// // modifies the original array
// // returns the reversed array

// let id = [23, 35, 56, 27, 36, 68, 35, 23];
// console.log(id.reverse()); // [23, 35, 68, 36, 27, 56, 35, 23]
// console.log(id.reverse(67)); // [23, 35, 56, 27, 36, 68, 35, 23]

// //! 11. sort()
// // sorts the array based on first alphabets
// // syntax: arrayname.sort()
// // modifies the original array
// // returns the sorted array

// let names = ["apple", "mango", "banana", "orange"];
// console.log(names.sort()); // ['apple', 'banana', 'mango', 'orange']

// let numbers = [14, 2, 6, 0, 24, 263, 13];
// console.log(numbers.sort()); // [0, 13, 14, 2, 24, 263, 6]

// let code = [20, 40, 20, 40, 67, 67, 40, 40];
// console.log(code.sort()); // [20, 20, 40, 40, 40, 40, 67, 67]

// let fruits = ["apple", "apple", "apple", "kiwi", "mango", "banana", "orange"];
// console.log(fruits.sort()); // ['apple', 'apple', 'banana', 'kiwi', 'mango', 'orange']



// //! 12) slice()
// used to extract some part of an array
// syntax: array.slice(start index, end ind)
// start index is included
// end index is excluded
// does not modify original array

// let num = [10, 20, 30, 40, 50];
// console.log(num.slice(1, 3));
//  console.log(num.slice(0, 3));
//  console.log(num.slice(0, 5));
// console.log(num.slice(0, 6));
// console.log(num.slice(2, -3));

// //! 13) flat()
// It is used to flatten an array
// Syntax: array.flat(depth value)
// depth gets applied value
// default value is 1
// It does not modify original array
// It returns the flattened array

// let arr1 = [10, [20, 30, [40, 50, [60, [70]]]]];
// console.log(arr1);
// console.log(arr1.flat(1));
// console.log(arr1.flat(2));
// console.log(arr1.flat(3));
// console.log(arr1.flat(4));
// console.log(arr1.flat(Infinity));


//! 14> join()
//? used to join array elements into a string
//? syntax: array.join(separator)
let fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1);
console.log(fruits1.join(","));
console.log(fruits1.join(" "));
console.log(fruits1.join("-"));
console.log(fruits1.join("_"));

let navbar = ["home", "about", "profile", "setting"];
console.log(navbar.join(","));

//! 15> toString
 console.log(fruits1);

console.log(fruits1.toString());

// Higher method
//? map

let arr1 = [10,20,30]
arr1.map((ele,ind)=>
{
    console.log(ele)
     console.log(ind)
})

let male=["shiva","Ganesha","Vishnu"]
male.map((ele,ind)=>{

        console.log(`mr ${ele}`)
        console.log(ind)
}

)
let Female=["Parvathi","Gowri","Lakshmi"]
Female.map((ele,ind)=>{

        console.log(`ms ${ele}`)
        console.log(ind)
}

)
let  Pass=['Hars_21@123','harsh','hars@7189']
let resultttt=Pass.filter((ele)=>{
return ele.length>=6
})
console.log(resultttt)

let marks=[40,50,30,20]
 let Marks=marks.filter((ele,)=>{
    return ele>30
    
})
console.log(Marks)



// //! Array is a Linear Data structure ,it can store homegeneous and heterogeneous type of Data.
// //? Array Methods
// //! 1) length-it is used to fetch the size of an element
// let arr=[10,20,30,40,50]
// console.log(arr.length);
// //! 2) push is used to add the element at the end
// arr.push("Hello");
// console.log(arr);
// //! 3) Pop is used to remove element  last element from the Array 
// arr.pop();
// console.log(arr);
// //! 4) shift-is used to remove first element
// arr.shift();
// console.log(arr);
// //!  5) unshift is used to add element to the starting
// arr.unshift("Hi")
// console.log(arr);

// //! 6) for in->used to fetch the index of elements
// let car=[10,"Hi",20,"Bye"]
// for(index in car){
//     console.log(index)
// }
// //! 7) for of is ussed to get the values
// let ary=[10,100,200,300]
// for(value of ary)
// {
//     console.log(value)
// }


// //! 8) forEach will fetch the  both index and value.

// let arry=[1,2,10,"HI","FOREACH"]
// arry.forEach((x,y)=>{
//     console.log(x,y);
// });

// //! 9) filter is used to filter the array elements based on the Condition.

//     let arrayy=[1,2,10,40,50,100]
//      let res =arrayy.filter((x)=>{
//             return x>20
//                         }
//                 )
//                 console.log(res);
// //! 10) Map is used to target each and every individual elements of Array.
    
//  let arrayys=[1,2,10,40,50,1000]
//  let arya=arrayys.map((x)=>{

//     return x+10;
//  }
// )
// console.log(arya);

// //! 11)reduce-use to add all the elements
// let red = [1,2,50,100,1000]
// let reds=red.reduce((x,y)=>
// {
//     return x+y
// }
// )
// console.log(reds);
// //!  12)find-find will return first matching element
// let array1 = [1,2,50,100,1000]
// let array11=array1.find((x)=>
// {
//     return x>10
// }
// )
// console.log(array11)

// //!  13) some->it checks at least any one matching element with the condition ,if match it will retun true and if it fails it will return false
// let array2 = [1,2,50,100,1000]
// let array12=array2.some((x)=>
// {
//     return x>10
// }
// )
// console.log(array12)

// //!  14) Every-it checks all the element matching with the condition,if matching it will return true if it doesn't matches it will return false
// let array3 = [1,2,50,100,1000]
// let array13=array3.every((x)=>
// {
//     return x>10
// }
// )
// console.log(array13)
