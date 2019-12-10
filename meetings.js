function meeting(s) {
  let upper = s.toUpperCase();
  let single = upper.split(';')
  let newArr= []
  let result = ''
  let newStr = ''
  
  for(let i = 0; i < single.length; i++){
    newArr.push(single[i].split(':'))
    newArr[i].reverse() + " "
    newArr.sort()
    result = `(${newArr.join(')(')})` 
  }

  if(result.includes(',')){
    return result.replace(/,/g, ', ')
  }

}
