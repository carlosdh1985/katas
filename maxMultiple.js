function maxMultiple(divisor, bound){
  let max = 0;
  if(bound % divisor === 0){
    return bound
  }
  else{

   for (let i = divisor; i < bound; i++){
     
     if(i%divisor === 0){
       max = Math.max(i)
     }
   }

  }
return max

}
