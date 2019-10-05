function countSheeps(arrayOfSheep) {
  let count = 0;
  if(arrayOfSheep === null){
    return 0;
  }
  else{
     for (let i = 0; i <arrayOfSheep.length; i ++){
     if(arrayOfSheep[i] === true){
     count += 1;
     }
     }
  }
  return count;
}
