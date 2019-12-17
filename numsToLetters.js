function switcher(x){
   let result = '';
   
   for(let i = 0; i < x.length; i++){
     if(x[i] === '27'){
        result += String.fromCharCode(33);
       }
     else if(x[i] === '28'){
       result += String.fromCharCode(63)
       
     }
     else if(x[i] === '29'){
       result += String.fromCharCode(32)
        
     }
     else{
        result += String.fromCharCode(26 - parseInt(x[i]) + 97)
     }
     
   }

   return result
}
