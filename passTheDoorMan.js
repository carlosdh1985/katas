function passTheDoorMan (word){
   let number = 0
   for(let i = 0; i < word.length; i++){
     if(word[i] === word[i+1]){
       number = word.charCodeAt(i)
     }
   }
  return 3 * (number - 96)
}
