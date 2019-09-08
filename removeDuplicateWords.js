function removeDuplicateWords (s) {
  let duplicate = [];
  
   let arr = s.split(' ');
   for(let i = 0; i < arr.length; i++){
   if(!duplicate.includes(arr[i]))
      
      duplicate.push(arr[i]);
        
  }
  return duplicate.join(' ');
}
