function allNonConsecutive (arr) {
 let newArr = []
 let obj = {};
 for (let j = 0; j < arr.length -1; j++){
   if(arr[j] + 1 === arr[j + 1]){
      newArr = newArr;
   }
   else{
      obj.i = arr.indexOf(arr[j + 1]);
      obj.n = arr[j + 1];
      newArr.push({i: obj.i, n: obj.n})
     
   }
 }
 
 return newArr;
}
