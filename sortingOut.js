function menFromBoys(arr){
    let newArr = []
    for(let j = 0; j < arr.length; j++){
       if(!newArr.includes(arr[j])){
         newArr.push(arr[j])
       }
    }
    
  let even = []
  let odd = []
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] % 2 === 0){
      even.push(newArr[i])
      even.sort((a, b)=>{
        return a - b
      })
    }
    else{
      odd.push(newArr[i])
      odd.sort((a, b)=>{
        return b - a
      })
    }
  }

return even.concat(odd)
}
