function stringy(size) {
  let strUnos = "10";
  if(size % 2 === 0){
     strUnos = "10".repeat(size/2);
  }
  else{
     strUnos = "10".repeat(size/2) + "1"
     
  }

return strUnos

}
