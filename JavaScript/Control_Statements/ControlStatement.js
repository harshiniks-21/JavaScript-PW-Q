//! if

let a=10

if(a>=18)
{
   console.log("Eligible To Vote")
    
}
else
{
    console.log("Not Eligible to Vote")
}


let age=20;
let id=false;

if(age>=18)
{
    console.log("Eligible to Vote")
    {
        if(id==true)
        {
            console.log("Id is present")
        }
        else
        {
           console.log("Major but id is mandatory")
        }
    }

}  else
    {
        console.log("You are Minor");
    }

          // ? //if else
    let Username1="admin"
    let password1="Password"
    if(Username1==="admin" && password1==="Password")
    {
   {
    console.log("Valid Credentials")
   }
  
    }
    else
    {
    console.log("Invalid Credentials")
    }
   



    // ? //nested if else
    let Username="admin"
    let password="Password"
    if(Username==="admin")
    {
        if(password==="Password")
   {
    console.log("Valid Credentials")
   }
   else{
    console.log("Invalid Password")
   }
  
    }
    else
    {
    console.log("Invalid Credentials")
    }
  
    // ? //if else if
    let marks=102
    if(marks>=90)
    {
        console.log("Grade A+")
    }
    else if(marks>=80)
    {
        console.log("Grade A")
    }
    else if(marks>=70)
    {
        console.log("Grade B+")
    }
    else if(marks>=60)
    {
        console.log("Grade B")
    }
    else if(marks>=50)
    {
        console.log("Grade C+")
    }
    else{
        console.log("Fail")
    }
  

      // ? //switch
    let day=10
    switch(day)
    {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;   
        default:
            console.log("Invaid Key")
    }

    // ? // task1:Traffic signal
    let colour=1
    switch(colour)
    {
        case 1:
            console.log("stop")
            break;
        case 2:
            console.log("Get Ready")
            break;
        case 3:
            console.log("Goo")
        default :
            console.log("Do Nothing")
    }

    
