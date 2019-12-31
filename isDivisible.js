function isDivisible(n, x, y) {
 
   let answer = false;
   
   if(n%x === 0 && n%y === 0){answer = true}else{answer = false}
   
   return answer
   
}
