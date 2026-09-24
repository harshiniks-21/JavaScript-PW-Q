function startCar()
{
console.log("started the car");
}
let time = Date.now();
let extraTime = 500;
let waitTime = time +extraTime;
function onMusic()
{
    startCar();

while(Date.now() < waitTime)
{
    console.log("Trying to Turn On Music")
};
console.log("Music is Turned On")
}
function moveCar()
{
        onMusic();
        console.log("car is moving")
}
function pitStop()
{
        moveCar();
        console.log("Trying to Turn On Music")
}
function reachDestination()
{
        pitStop();
        console.log("Trying to Turn On Music")
}
reachDestination();



