function iqTest(numbers){
  let arr = [];
  let even = [];
  let odd = [];
  let x = 0;
  let y = 0;
  for (let i=0; i < numbers.split(' ').length; i++){
      arr.push(parseInt(numbers.split(' ')[i]));
     if (arr[i] % 2 === 0){
        even.push(arr[i])
        }
      else{
        odd.push(arr[i]);
      }
       }
        if(even.length === 1){
           return arr.indexOf(even[0]) + 1;
             }
        else if(odd.length === 1){
          return arr.indexOf(odd[0]) + 1;
              }
        else {
          return "There is no different number";
        }
           
}