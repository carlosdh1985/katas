function binToDec(bin){
  let arr = bin.split('');
  let rev = arr.reverse();
  let f = rev.entries();
  let decimal = 0;
  let ar = []
  for(x of f){
   ar.push(x);
  }
  for (let i = 0; i < ar.length; i++){
    if(ar[i][1] === '1'){
      //  positions.push(ar[i][0]);
       decimal += Math.pow(2, ar[i][0]); 
    }
  }
return decimal;
}
