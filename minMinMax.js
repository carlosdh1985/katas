function minMinMax(array) {
  let small = array.sort(function(a, b){return b-a}); 
  let soFar = []
  soFar.push(small.pop(), small.shift())
  
  for(let i = 1; i < array.length; i++){
        if(!array.includes(soFar[0] + i)){
        soFar.push(soFar[0] + i)
        break;
     }
  }
  
return soFar.sort(function(a, b){return a-b});
}
