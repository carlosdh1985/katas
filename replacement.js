
function replacement(a){

  let max = 0;
  let newArr = [...a];
  for(let i = 0; i < a.length; i++){
    if(a[i] > max){
       max = a[i];
       
    }
  }

    // newArr.indexOf(max)
    if(max > 1){
    newArr.splice(newArr.indexOf(max), 1, 1);
    return newArr.sort(function(a, b){return a - b});
    
    }
    else{
       newArr.splice(newArr.indexOf(max), 1, 2);
      return newArr.sort(function(a, b){return a - b});
    }
    
}
