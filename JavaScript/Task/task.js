//factorial of a number
 function calculator(){
    let no=5;
    let fact=1;
   for(let i=1;i<=no;i++)
    {
            fact = fact * i;
    }
console.log(fact);
}
calculator();

    


// //! reverse a string without using inbuilt method
// let s1="JavaScript"
// let reverse=""
// for(let i=s1.length-1;i>=0;i--)
// {
//         reverse= reverse+ s1.charAt(i);
// }
// console.log(reverse)

// //! reverse a string with using inbuilt methods
// let s2="JavaScript"
// console.log(s2.split("").reverse().join(""))

//! reverse a Word in a Sentence with using inbuilt methods
// let s3="My name is Harshini"
// let word=s3.split(" ")
// console.log(word)
// word[3]=word[3].split("").reverse().join("")
// console.log(word[3])
// let result=word.join(" ")
// console.log(result)




//!reverse a whole sentence using inbuilt Methods.
// let sent="Am Practising JavaScript Programming language"
// rev=sent.split(" ").reverse().join(" ")
// console.log(rev)

//!reverse a whole sentence without using inbuilt Methods.
// let str="Javascript is my fav programming language"
// let res=""
// let word=""
// for(let i=str.length-1;i>=0;i--)
// {
//        if(str[i]!==" ")
//        {
//         word=str[i]+word
//        }
//        else{
//         res=res+word+" "
//         word=" "
//        }
// }
// res=res+word
// console.log(res)






//! reverse a Word in a Sentence WithOut using inbuilt methods

//*1**LEAP YEAR.
// function isLeapYear(year) {
//   return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }
 

//console.log(isLeapYear(2027));
//* //*2>Reverse a number.
// let str=1234
// let rev=str.toString().split('').reverse('').join('');
// console.log(rev);
// //* //*3>Reverse words in a sentence
// let sen="My name is Harshini"
// let wrd=sen.split(' ')
// console.log(wrd);
// wrd[1]=wrd[1].split('').reverse('').join('')
// console.log(wrd[1])
// console.log(wrd)
// let result=wrd.join(" ")
// console.log(result)

// //* //*4>Even or Odd
// let a=15
// if(a%2==0)
// {
//   console.log(`${a} is an Even number`);
// }
// else
// {
       
//    console.log(`${a} is an Odd number`);

// }

// //* //* 5>Find the Largest of Three Numbers.
// let a1=10;
// let b1=5;
// let c1=1000;
// let d=Math.max(a1,b1,c1);
// console.log(d)
 
// //? without using built in function.
// function largest(a,b,c){
//        let large;
//        if(a>=c && a>=b)
//        {
//               largest=a;
//        }
//        else if (b>=c && b>=a)
//        {
//               largest=b;
//        }
//        else {
//               largest=c;
//        }
//        return largest;
// }
// console.log(largest(0,1,-5023456780))











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


// let a=20
// let d=a
// console.log(a)
// console.log(d)
// d=60
// console.log(a)
// console.log(d)

//* // Factorial number
let fact=1;
let number=5
for(let i=number;i>=1;i--){
       fact=fact*i
}

console.log(fact);

//* // array elements in reverse order.
let arr=[10,20,30,40]
console.log(arr.reverse());

//* // remove duplicate values from Array.
let arr1=[10,20,20,30,40,50,60,10,20,30]
let set=[...new Set(arr1)]
console.log(set);


