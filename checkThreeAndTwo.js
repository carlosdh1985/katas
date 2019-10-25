function checkThreeAndTwo(array) {
  let count_a = 0;
  let count_b = 0;
  let count_c = 0;

  for(let i = 0; i < array.length; i++){
   if(array[i] === 'a'){
     count_a += 1;
   }
   else if(array[i] === 'b'){
     count_b += 1;
   }
   else if(array[i] === 'c'){
     count_c += 1;
   }
  }

  if ((count_a === 3 || count_b === 3 || count_c === 3)
  && (count_a === 2 || count_b === 2 || count_c === 2 )){
    return true;
  }
  else{
    return false
  }
}
