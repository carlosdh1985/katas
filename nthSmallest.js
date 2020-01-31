function nthSmallest(arr, pos){
  arr.sort((a, b)=>{
  return a - b
})
return arr[pos - 1]
}
