// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
    
}
distanceFromHqInBlocks();


function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264

}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264); 

}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000 ) {
        return (distanceTravelled - 400 ) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25;
    } else {
        return `cannot travel that far`
    }

}