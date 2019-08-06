function expressionMatter(a, b, c) {
  
  let pos1 = a + b + c;
  let pos2 = a * b * c;
  let pos3 = (a + b) * c;
  let pos4 = a * (b + c);
  let pos5 = a + b * c;
  let pos6 = a * b + c;
  

  
  
  return Math.max(pos1, pos2, pos3, pos4, pos5, pos6);
}
