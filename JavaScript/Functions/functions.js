// ! // Functions
//? Re-usable block of code
//! 1.Named functions:
//general,basic,function declaration all are same names

//! syntax
//function fun_name()
{
    //code
}
//fun_name->Calling  the function

//? eg:
console.log("Start"); //Start
function greet()
{
    console.log("Hello EveryBody");    //no output because we have not called the method
}

greet(); //function calling,invoking,executing the function we get output
console.log("End");
greet(); //we can call n number of times the function

//! add
function add()
{
    let a=10;
    let b=20;
    let sum=a+b;
    console.log(sum);
}
add()
add()
add()
add()

//! with Parameters and arguments
//? parameters are variables only which stores the data,don't give declaration,
function addwithparameter(num1,num2)
{
    console.log(num1,num2);
    console.log(num1+num2);
}
addwithparameter(10,20)
addwithparameter(10,20)

//! greet-->welcome Harshini->different names

function greeting(name)
{
    console.log("Hello, Welcome " ,name+"!!");
    console.log(`Hello,${name} Welcome Back again!!}`)
}
greeting("Harshini")
greeting("Shakunthala")

//! Square the number
function squareNumber(number)
{
    square=number*number
    console.log("The Square number of:", number , "is " + square);

}
squareNumber(5)
squareNumber(10)
//! print the students details
//name,age,course,duration

function student_details(name,age,course,duration)
{
        console.log("The students details are as below")
    console.log(`
        Name : ${name}
        age : ${age}
        course : ${course}
        duration : ${duration}`);
}
student_details("Harshini",25,"Playwright","three-mon")
 //! check the eligibility of a person to vote
 //John is eligible to vote.?
 function check_is_eligible(age,id,name)
 {
    if(age>=18)
    {
        if(id===true)
        {
            console.log(`The ${name} is eligible to vote,has id and eligible`);
        }
        else
        {
             console.log(`The ${name} is  not eligible to vote,bcoz id is not present`);
        }
    }
    else
    {
        console.log(`The ${name} is Minor`);
    }
 }
 check_is_eligible(20,true,"John")
 check_is_eligible(21,false,"Harshini")

 //check even or odd
 //20 is even number
 // 7 is odd number
 function chech_is_evenOrOdd(num)
 {
    if(num%2==0)
    {
        console.log(`the ${num} is an even number`);
    }
    else
    {
        console.log(`the ${num} is an odd number`);
    }
 }
 chech_is_evenOrOdd(20)
 chech_is_evenOrOdd(7)


 function adds(a,b)
 {
    console.log(a+b)
 }
 adds(10,20)
 adds(10)
 adds()
 adds(10,20,50)

 //! function with return Keyword.

 function multi(x,y)
 {
    return(x*y)
 }
 //?call the function in a printing statement
 console.log(multi(10,20))
 //? call the function and store the result and utilize
 let multiplyresult=multi(2,4)
 console.log(multiplyresult)
//? utilize the result later
 let addition = multiplyresult + 10
 console.log(addition)




//! 1)function without parameter and without return keyword

//! ex-01
function addno(){
let a=100
let b=20
console.log(a+b)
}
addno()

//! ex-02
function sub()
{
    let a=30
    let b=20
    console.log(a-b)
}
sub()

//! 2)function with parameters and without return keyword
//! ex-1
function addnos(a,b){

console.log(a+b)
}
addno(2,3)

 //! ex-2
function sub(a,b)
{
    console.log(a-b)
}
sub(5,4)


//! ex-3
function evenno(a)
{
if(a%2==0)
    {
        console.log(`the number ${a} is even`)
    }
    else
    {
        console.log(`the number ${a} is not an  even`)
    }
    
}
evenno(10)



//!  3)function without parameters and with return keyword
//! ex-1
function additions()
{
    let a=10
    let b=20
    return(a+b)

}
console.log(additions())

//! ex-2
function subtraction()
{
    let a=50
    let b=10
    return(a-b)

}
console.log(subtraction())





//! 4)function with parameters and with return keyword
//! ex-01
function addon(a,b)
{
    
    return(a+b)

}
console.log(addon(1000,20))

//! ex-02
function sub(a,b)
{
    
    return(a-b)

}
console.log(sub(1000,20))
//! ex-03
function evenno(a)
{
if(a%2==0)
    {
        return(`the number ${a} is even`)
    }
    else
    {
        return(`the number ${a} is not an  even`)
    }
    
}
evenno(10)
console.log(evenno(10))


function swap(a,b)
{



}

console.log(swap(10,20))
