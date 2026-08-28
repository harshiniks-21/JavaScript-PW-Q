//! Array is a Linear Data structure ,it can store homegeneous and heterogeneous type of Data.
//? Array Methods
//! 1) length-it is used to fetch the size of an element
let arr=[10,20,30,40,50]
console.log(arr.length);
//! 2) push is used to add the element at the end
arr.push("Hello");
console.log(arr);
//! 3) Pop is used to remove element  last element from the Array 
arr.pop();
console.log(arr);
//! 4) shift-is used to remove first element
arr.shift();
console.log(arr);
//!  5) unshift is used to add element to the starting
arr.unshift("Hi")
console.log(arr);

//! 6) for in->used to fetch the index of elements
let car=[10,"Hi",20,"Bye"]
for(index in car){
    console.log(index)
}
//! 7) for of is ussed to get the values
let ary=[10,100,200,300]
for(value of ary)
{
    console.log(value)
}


//! 8) forEach will fetch the  both index and value.

let arry=[1,2,10,"HI","FOREACH"]
arry.forEach((x,y)=>{
    console.log(x,y);
});

//! 9) filter is used to filter the array elements based on the Condition.

    let arrayy=[1,2,10,40,50,100]
     let res =arrayy.filter((x)=>{
            return x>20
                        }
                )
                console.log(res);
//! 10) Map is used to target each and every individual elements of Array.
    
 let arrayys=[1,2,10,40,50,1000]
 let arya=arrayys.map((x)=>{

    return x+10;
 }
)
console.log(arya);

//! 11)reduce-use to add all the elements
let red = [1,2,50,100,1000]
let reds=red.reduce((x,y)=>
{
    return x+y
}
)
console.log(reds);
//!  12)find-find will return first matching element
let array1 = [1,2,50,100,1000]
let array11=array1.find((x)=>
{
    return x>10
}
)
console.log(array11)

//!  13) some->it checks at least any one matching element with the condition ,if match it will retun true and if it fails it will return false
let array2 = [1,2,50,100,1000]
let array12=array2.some((x)=>
{
    return x>10
}
)
console.log(array12)

//!  14) Every-it checks all the element matching with the condition,if matching it will return true if it doesn't matches it will return false
let array3 = [1,2,50,100,1000]
let array13=array3.every((x)=>
{
    return x>10
}
)
console.log(array13)

