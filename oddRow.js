function oddRow(n) {
  let initial = n * n - (n - 1)
 let x = []
  for(let i = initial; i < (initial + n*2); i++){
    if(i % 2 !== 0){
      x.push(i)
    }
     }
  return x;
}
