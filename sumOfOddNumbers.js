function rowSumOddNumbers(n) {
	let initialNumber = n * (n-1) + 1;
  let arr = [];

  for(let i = initialNumber; i < initialNumber + (n * 2); i++){
    if(i % 2 !== 0){
      arr.push(i)
    }

  }

 return arr.reduce((total, num)=>{
   return total + num
 })
}
