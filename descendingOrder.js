function descendingOrder(n){
  
  let arr = n.toString().split('')
  let theArr = arr.sort(function(a, b){return b-a});
  return parseInt(theArr.join(''))
}
