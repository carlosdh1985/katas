function take(arr, n) {
   let newArr = [];
   if(arr.length === 0){
     return [];
   }
   else{
  for (let i = 0; i < arr.length; i++){
  
  if (i < n){
  newArr.push(arr[i])
  }
    }
    }
    return newArr
}
