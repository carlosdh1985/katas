function removeRotten(bagOfFruits){

  if(bagOfFruits){
  for(let i = 0; i < bagOfFruits.length; i++){
     if(bagOfFruits[i].slice(0, 6) === 'rotten'){
       bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase()
     }
  }
}else{
return []}
  return bagOfFruits
}
