function wordsToMarks(string){
   let numb = 0
   let arr = []
  for(let i = 0; i < string.length; i++){
      numb = string.charCodeAt(i)
      arr.push(numb - 96)
  }

  return arr.reduce((t, p)=> t + p)

}
