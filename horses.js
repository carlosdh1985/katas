function horses(n) {
  let answer;
   if(Number.isInteger(n)){
        if(n < 3){
          answer = n
        }
        else{
          answer = n * (n-1) * (n - 2)
        }
       
   }
   else{
       answer = undefined
   }

   return answer; 
}
