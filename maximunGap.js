function maxGap(numbers){
  
 let sorted = numbers.sort(function(a, b){return a-b});
 let greaterDif = 0;
 for (let i = 0; i < sorted.length; i++){
     if(sorted[i + 1] - sorted[i] > greaterDif){
       greaterDif = sorted[i + 1] - sorted[i]
     }
    }

    return greaterDif;
}
