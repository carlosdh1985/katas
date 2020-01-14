function evenFibo(){
var arr = [1, 2];
var i = 3;
while (i <= 4000000){
  if(i === arr[arr.length - 1] + arr[arr.length - 2]){
   arr.push(i);
  }
  i++;
}
let sum = 0

for(let j = 0; j < arr.length; j++){
  if(arr[j] % 2 === 0){
    sum += arr[j]
  }
}
return sum
}
