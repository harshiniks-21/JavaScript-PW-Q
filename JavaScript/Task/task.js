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


//! reverse a string without using inbuilt methods
let s1="JavaScript"
let reverse=""
for(let i=s1.length-1;i>=0;i--)
{
        reverse= reverse+ s1.charAt(i);
}
console.log(reverse)

//! reverse a string with using inbuilt methods
let s2="JavaScript"
console.log(s2.split("").reverse().join(""))

//! reverse a Word in a Sentence with using inbuilt methods
let s3="My name is Harshini"
let word=s3.split(" ")
console.log(word)
word[3]=word[3].split("").reverse().join("")
console.log(word[3])
let result=word.join(" ")
console.log(result)

//! reverse a Word in a Sentence WithOut using inbuilt methods




















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


let a=20
let d=a
console.log(a)
console.log(d)
d=60
console.log(a)
console.log(d)