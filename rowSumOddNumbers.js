function rowSumOddNumbers(n) {

  let firstInRow = Math.pow(n, 2) - (n - 1)
  let sum = 0;

  for(let i = firstInRow; i < firstInRow + (n * 2); i++){
    if(i% 2 !== 0){
       sum += i;
    }
  }
   return sum
}
