function maxNumber(n){
  let arr = n.toString().split('')
   arr.sort((a, b)=>{
          return b - a
        })
      
  return parseInt(arr.join(''))
}
