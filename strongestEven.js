function strongestEven(n, m){
     function strongness(num){
         let count = 0;
         let result = 0;
          if(num % 2 !==0){
             result = 0
            }else{
        while(num % 2 === 0){
           count +=1;
          num = num/2
          }
       result = count
        }
      return result
     }
     let max = strongness(n);
     let answer = 0
     for(let i = n; i <= m; i++){
        if(strongness(i) >= max){
          max = strongness(i)
          answer = i;
          }
       }

    return answer

}
