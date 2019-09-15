function maxProduct(numbers, size){
  
  let arr = numbers.sort(function(a, b){return b-a});
  let newArr = arr.slice(0, size);
  
   return newArr.reduce(myFunction)
function myFunction (total, num){
return total*num;
}
}
