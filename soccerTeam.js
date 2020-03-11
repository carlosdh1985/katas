function points(games) {
  let dif = '';
  let sum = 0;
  for(let i = 0; i < games.length; i++){
      dif += games[i].split(":").join('');
    }

  for(let j = 0; j < dif.length; j++){
    if(j % 2 === 0){
    if(Number(dif[j]) > Number(dif[j + 1])){
        sum += 3
    }
    else if(Number(dif[j]) === Number(dif[j + 1])){
          sum += 1
    }
    else{
      sum += 0
     }
    }
  }
  return sum
}
