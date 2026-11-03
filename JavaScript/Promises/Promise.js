//! promises:
//? Future result of an application.
//? Ex:->api's,dpwnload,Uploaded.

new promise((res,rej))=>{
    res(10);

}).then(output => 
{
    console.log("First result :",output)
    return output + 5
}).then(output => 
{
    console.log("Second  result :",output)
    return output + 2
})
