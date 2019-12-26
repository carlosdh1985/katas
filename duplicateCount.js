function duplicateCount(text){
  let text_low = text.toLowerCase()
  let uniques = []
  let repeated = []
  let mostUniques = []

  for(let i = 0; i < text_low.length; i++){
    if(!uniques.includes(text_low[i])){
      uniques.push(text_low[i])
    }
    else{
       repeated.push(text_low[i])
       
    }

  }

  for(let j = 0; j < repeated.length; j++){
    if(!mostUniques.includes(repeated[j])){
      mostUniques.push(repeated[j])
    }
  }
  return mostUniques.length
}
