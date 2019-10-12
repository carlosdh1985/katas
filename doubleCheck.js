function doubleCheck(str){
let result = false;
let str_1 = str.toUpperCase();
    for(let i = 0; i < str_1.length; i++){
      if(str_1[i] === str_1[i+1]){
        result = true;
      }
        
        }
return result;
    }
