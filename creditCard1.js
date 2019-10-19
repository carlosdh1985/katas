function replacements(str){
  let long = str.length - 4;
  let string = "*".repeat(11);
   let newStr = str.slice(long);
   let newStr1 = string.concat(newStr)
     return newStr1;
}
