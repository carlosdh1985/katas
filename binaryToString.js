function binaryToString(str){
  if(str.length !== 0){
        
        let arr = []
        let subs = str.length/8
        for(let i = 0; i <= subs - 1; i++){
           arr.push(str.substr(i * str.length/subs, str.length/subs))
          }
        function binToDec(bin){
          let array = bin.split('');
          let rev = array.reverse();
          let f = rev.entries();
          let decimal = 0;
          let ar = []
          for(x of f){
           ar.push(x);
           }
        for (let d = 0; d < ar.length; d++){
           if(ar[d][1] === '1'){
        decimal += Math.pow(2, ar[d][0]); 
      }
     }
   return decimal;
  }
        let binarr = []
        for(let j = 0; j < arr.length; j++){
        binarr.push(binToDec(arr[j]))
        }
       let result = []
       for(let p = 0; p < binarr.length; p++){
       result.push(String.fromCharCode(binarr[p]));
        }
    return result.join('')
    }

  else{
    return ''
  }

  
}
