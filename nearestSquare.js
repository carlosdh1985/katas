function nearestSq(n){

let i = 1;
let x = [];
while(i <= n){
  if(i*i <= n){
    x.push(i*i);
  }
  i++;
}
let defecto = x[x.length - 1];
let post = Math.sqrt(defecto) + 1;
let exceso = Math.pow(post, 2);

if(exceso - n > n - defecto){
  return defecto;
}
else if(exceso - n < n - defecto){
  return exceso;
}
else{
  return n
}
  
}
