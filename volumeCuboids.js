function findDifference(a, b) {
  let vola = a.reduce((total, num)=> total*num)
  let volb = b.reduce((total, num)=> total*num)

  if(volb > vola){
  return volb - vola;
  }
  else if(vola > volb){
   return vola- volb;
  }
  else{
  return 0;
  }
}
