function findOutlier(integers){
  let evens = []
  let odds = []
   for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      evens.push(integers[i])
    }
    else{
      odds.push(integers[i])
    }
  }
    if(odds.length > evens.length){
      return evens[0]
    }
    else{
      return odds[0]
    }
}
