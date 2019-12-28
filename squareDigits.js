function squareDigits(num){
  
  let arr = num.toString().split('')
  
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.pow(parseInt(arr[i]), 2)
  }
  return parseInt(arr.join(''))
}
