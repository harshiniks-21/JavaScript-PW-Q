//! Order Food
//? Order Is Placed-->1S
//? order is preparing-->3s
//? order is in the way  
//? order is delivered -->
function PlaceOrder()
{
    return new Promise(res => {
        setTimeout(()=>
        {
            res("Order is Placed")
        },1000);
    })
}
function PrepareOrder()
{
    return new Promise(res => {
        setTimeout(()=>
        {
            res("Order is Prepared")
        },3000);
    })
}
function OrderOntheWay(){
 return new Promise(res => {
        setTimeout(()=>
        {
            res("Order is on the way")
        },4000);
    })


}

async function Pizza()
{
    let p1 = await PlaceOrder()
    console.log(p1);


    let p2 = await PrepareOrder()
    console.log(p2);

    let p3 = await OrderOntheWay()
    console.log(p3);
    
    console.log("Order is Delivered")

}

Pizza();
