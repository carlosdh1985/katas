function createPhoneNumber(numbers){
  let first = numbers.splice(0,3);
  let second = numbers.splice(0,3)
  let third = numbers.splice(0)
  let str = `(${first}) ${second}-${third}`;
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] != ","){
      arr.push(str[i])
    }
  }
return arr.join('')
}
