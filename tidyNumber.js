function tidyNumber(n){
 let arr = n.toString().split('').sort()
 let toCompare = parseInt(arr.join(''))

  if(n !== toCompare){
    return false
  }
  else{
    return true
  }
}
