function minValue(values){
  let uniques = []
  for(let i = 0; i < values.length; i++){
      if(!uniques.includes(values[i])){
        uniques.push(values[i])
        uniques.sort((a, b)=>{
          return a - b
        })
      }
  }
  return parseInt(uniques.join(''))

}
