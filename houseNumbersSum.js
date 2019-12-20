function houseNumbersSum(inputArray) {
  let arr = [];
  let sum = 0;
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] === 0){

      arr = inputArray.slice(0, inputArray.indexOf(inputArray[i]))
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
  
}
