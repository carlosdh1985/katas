function nbDig(n, d) {
    let squares = []
    let count = 0
    let str = ''
  for(let i = 0; i <= n; i++){
     squares.push(Math.pow(i, 2))
   }

str = squares.join()
for(let j = 0; j <= str.length; j++){
  if(str[j] == d){
    count += 1
  }
}
return count
}
