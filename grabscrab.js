function grabscrab(anagram, dictionary) {

  let match = anagram.split('').sort().join('');
  let partialResult = []
  let result = []
  for(let i = 0; i < dictionary.length; i++){
    if(dictionary[i].split('').sort().join('') === match)
    partialResult.push(i)
  }

if(partialResult.length !== 0){
 for (let j = 0; j < partialResult.length; j++){
     result.push(dictionary[partialResult[j]])
}
}
else{
  result = []
}
  return result
}
