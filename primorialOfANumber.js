function numPrimorial(n){
  let arrOfPrim = [2, 3, 5, 7];
  for (let i = 2; i < 100; i++){

if (i % 2 !== 0 && i % 3 !== 0 &&
i % 5 !== 0 && i % 7 !== 0){
   arrOfPrim.push(i)
}
 
}
   let x = arrOfPrim.slice(0,n);
   let prod = 1;
  for(let j = 0; j < x.length; j++){
    prod*=x[j];
  }
  return prod;
}
