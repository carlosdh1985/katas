function isValidWalk(walk) {
  let answer = '';
  let arr = [];
  let result = 0;
  if(walk.length !== 10){
      answer = false;
  }
  else{
     for(let i = 0; i < walk.length; i++){
        if(walk[i] === 'w'){
           arr.push(-1.0)
        }
        else if(walk[i] === 'e'){
         arr.push(1.0)
        }
        else if(walk[i] === 'n'){
         arr.push(0.1)
        }
        else if(walk[i] === 's'){
         arr.push(-0.1)
        }
            
     }
     for(let j = 0; j < arr.length; j++){
     result += arr[j]
   }

  if(result === 0){
    answer = true;
  }
  else{
    answer = false;
  }
     
  }
   
   
   
  return answer;
}
