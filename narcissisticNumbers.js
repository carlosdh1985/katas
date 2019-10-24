function isNarcissistic(n){
  let long = n.toString().length;
  let str = n.toString();
  // let result = true;
  let sum = 0;

  for(let i = 0; i < str.length; i++){
    sum += Math.pow(parseInt(str[i]), long)
 }
  
   if(sum === n){
        return true;
           }
           else{
             return false
           }

  
}
