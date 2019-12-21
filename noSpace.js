function noSpace(x){
  let arr = x.split('')

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === " "){
      arr[i]= "";
    }
  }

return arr.join('')

}
