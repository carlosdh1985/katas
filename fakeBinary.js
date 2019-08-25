function fakeBin(x){
  let ceros = '';
  let unos = '';
  let arr = [];
  for(let i = 0; i < x.length; i++){
      if(x[i] < 5){
       ceros = x[i] * 0;
       arr.push(ceros);
      }
      else{
       unos = x[i] / x[i];
       arr.push(unos)
      }
      
  }
  return arr.join('');
}
