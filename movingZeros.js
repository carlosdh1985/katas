
var moveZeros = function (arr) {
  let otroArr = [...arr];
  let x = [];
  let y = [];
  for (let i = 0; i < otroArr.length; i++){
   if(otroArr[i] === 0){
     x.push(otroArr[i]);
    otroArr.splice(i,1);
    i--;
     }
  }
     
 


  for (let j = 0; j < x.length; j++){
    otroArr.push(x[j]);
  }
  return otroArr
}
