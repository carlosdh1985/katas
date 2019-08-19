function points(games) {
let x = []
let y = []
let count = 0;
for(let i = 0; i < games.length; i++){
  x.push(parseInt(games[i]));
  y.push(parseInt(games[i].slice(2)))

  if(x[i] > y[i]){
    count += 3;
  }
  else if(x[i] === y[i]){
     count += 1;
  }
  else{
    count += 0;
  }
}


return count;


}
