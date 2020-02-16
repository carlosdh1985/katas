
function noBoringZeros(n) {
   let solution = 0
   if (n === 0 || n % 10 !== 0){
       solution = n
   }
   else {
    solution = n
     while(solution % 10 === 0){
      let b = solution / 10;
      solution = b;
  }
  
   }
return solution
}
