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