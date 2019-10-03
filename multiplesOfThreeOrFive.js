function solution(number){
  let arr = [];
  for(let i = 1; i < number; i++){
  if(i % 3 === 0 || i % 5 === 0 ){
     arr.push(i)
    }
  }
  if (arr.length !== 0){
  return arr.reduce((total, numb) =>{
    return total + numb
  })}
  else{
    return 0
  }
}
