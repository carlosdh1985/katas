function stairsIn20(s){
  return 20* (s[0].reduce((total, num) => total + num) +
  s[1].reduce((total, num) => total + num) +
  s[2].reduce((total, num) => total + num) +
  s[3].reduce((total, num) => total + num) +
  s[4].reduce((total, num) => total + num) +
  s[5].reduce((total, num) => total + num) +
  s[6].reduce((total, num) => total + num));
  
}
