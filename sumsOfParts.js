function partsSums(ls) {
  let finalArr = [0];
  let long = ls.length;
  let rev = ls.reverse()
  let sum = 0;
  for(let i = 0; i < long; i++){
    sum += rev[i];
    finalArr.push(sum)
  }


return finalArr.reverse()

}
