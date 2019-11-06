function countPositivesSumNegatives(input) {
     let arr = [];
     let count = 0;
     let sum = 0;
        if(!input || input.length === 0){
            return arr
        }
    
    else{
           for(let i = 0; i < input.length; i++){
              if(input[i] > 0){
                 count += 1;
               }
             else if (input[i] < 0){
              sum += input[i]
              }
          }
          arr.push(count)
         arr.push(sum)
         return arr;
       }
