function countFibonacci(n) {
  
  function x(){
     let fibo = [0, 1, 1, 2];
     let nextNum = 0;

     for (let i = 0; i < fibo.length; i++){
      nextNum = fibo[fibo.length - 1] + fibo[fibo.length - 2];
      if(n > fibo.length){
         fibo.push(nextNum);
      }
      
   }
   return fibo
   
  }
  

 return x();



}
