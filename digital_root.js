function digital_root(n) {
  
  let arr = n.toString().split('');
  let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += parseInt(arr[i])
    }
  
     if(sum < 10){
       return sum
     }
     else{
     let result = sum.toString().split('');
     let finalResult = result.reduce((total, item)=>{
        return parseInt(total) + parseInt(item)
     })
     return finalResult
     }
     
