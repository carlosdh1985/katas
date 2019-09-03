function isPalindrome(x) {
  let y = x.toLowerCase();
  if(y === y.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }
}
