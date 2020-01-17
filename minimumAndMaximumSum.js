function minimumSum(values, n) {
 let sum_1 = 0
 let x = values.sort(function(a, b){return a-b});
 let result_1 = x.splice(0, n)
  for(let i = 0; i< result_1.length; i++){
    sum_1 += result_1[i]
  }
 return sum_1
}

function maximumSum(values, n) {
  let sum = 0
  let x = values.sort(function(a, b){return b-a});
  if(n > values.length){
  n = values.length
  }
  let result_1 = x.splice(0, n)
  for(let j = 0; j< result_1.length; j++){
    sum += result_1[j]
  }
 return sum
}
