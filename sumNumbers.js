// Sum Numbers
function sum (numbers) {
   
   if(numbers.length > 0){
      return numbers.reduce((total, num)=> total + num)
   }
   else{
      return 0
   }
    
    
};
