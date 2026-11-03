// // //! Addition of two numbers
// let a=10
// let b=20
// let res=a+b
// console.log(`the sum of ${a} and ${b} is ${res}`)
//  // //! performing operation inside the printing statment without using third variable 
//  let c=10
//  let d=20
//  console.log(`the product of ${c} and ${d} is ${c*d}`)


//  //Tokanization
//  // //? case sensitive
//  let name="John"
//  let Name="smith"
 //task2 -Pre increment Post Increment.
//  let a =10
//  let b =5
//  console.log(a++);
//  console.log(b++);

// let a=5
// let b=a++ + a++ + ++a
// console.log(a)
// console.log(b) 
// let c= ++a + ++b + a++
// console.log(c)
// console.log(a)
// console.log(b)


// let stu={
// name:"John",
// id:101,
// age:25,
// address:{
//     city:"BGLR",
//     PinCode:572201
// }
// }
// //console.log('***************')

// for( keys in stu)
// {
// //console.log(keys)
// //console.log(stu[keys])
// console.log(`${keys}-${stu[keys]}`)
// }
//factorial of a number
 function calculator(){
    let no=0;
    let fact=1;
   for(let i=1;i<=no;i++)
    {
            fact = fact * i;
    }
console.log(fact);
}
calculator();

//revesrse a string
// function reverseString(str) {
//     let reversed = "";

//     // Loop through the string backwards
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i]; // Add each letter one by one
//     }

//     return reversed;
// }

// // Test the function
// console.log(reverseString("hello"));


// let s1 = "hello";
// let reversed = "";
// for(let i=s1.length-1;i>=0;i--){
//     reversed = reversed + s1.charAt(i);
// }
//! reverse a string without using inbuilt methods
// let s1="JavaScript"
// let reverse=""
// for(let i=s1.length-1;i>=0;i--)
// {
//         reverse= reverse+ s1.charAt(i);
// }
// console.log(reverse)

//! reverse a string with using inbuilt methods
let s2="JavaScript"
console.log(s2.split("").reverse().join(""))

//! reverse a Word in a Sentence without using inbuilt methods






















// console.log(reversed);
// let s1="hello";
// console.log(s1.split("").reverse().join(""));

// let s1="My name is Harshini"
// let s2=s1.split(" ")
// console.log(s2)
// if(s2.length===1)
// {
//      let s3=s2.reverse();
//      console.log(s3)  
// }
// else{
//         console.log(s2)
// }
// let str = "My name is Harshini";

// let arr = str.split(" ");

// arr[3] = arr[3].split("").reverse().join("");

// let result = arr.join(" ");

// console.log(result);


// let  str1="JavaScript is my fav prgm language"
//  let str2 =str1.split(" ")
//  console.log(str2);
//  let word=str2[5]
// let rev=""
// for (let i=word.length-1;i>=0;i--)
// {
//         rev= rev+ word.charAt(i);
// }
// str2[5]=rev
// console.log(str2.join(" "))

