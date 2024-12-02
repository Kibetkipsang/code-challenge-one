function speedDetector(speed){
const speedLimit = 70;
const demeritPointsMaximum = 12;
const demeritPoints = ((speed - speedLimit) / 5);
if (speed <= speedLimit){
console.log("Ok");
}
else if (demeritPoints>demeritPointsMaximum){
console.log("License suspended");
}
}