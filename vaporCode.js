function vaporcode(string) {
  
  let str = string.replace(/\s/g, '');
  let arr = str.toUpperCase().split('');
  let newStr = arr.join(',')

  return newStr.replace(/,/g, "  ");

}
