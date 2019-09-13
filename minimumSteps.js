function minimumSteps(numbers, value){
  
  
  let sorted = numbers.sort(function(a, b){return a-b});
  let sum = 0;
  for(let i = 0; i < sorted.length; i++){
       if(sorted[0] >= value){
       return 0;
     }
       else{
          sum+= sorted[i];
          if(sum >= value){
            return i;
          }
       }
     
     
   
  }

}
