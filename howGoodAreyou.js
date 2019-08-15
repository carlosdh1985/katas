function betterThanAverage(classPoints, yourPoints) {
  let lgth = classPoints.length;
  let sum = classPoints.reduce((total, num)=> total+num)
  
if(sum/lgth < yourPoints){
  return true;
}
else{
  return false;
}

}
