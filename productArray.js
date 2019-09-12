function productArray(numbers){
  let p = 1;
  let newArr = [];
  for(let i = 0; i < numbers.length; i++){
     let x = numbers[i];
         
      p = numbers.reduce(function (x, num){
       
       return x * num;
       
     })
     newArr.push(p/x);
  }
   return newArr
 
}
