function ToAlternatingCase(string) {
     let newStr = ''
     for(let i = 0; i < string.length; i++){
       
       if(string[i] === string[i].toUpperCase()){
          newStr += string[i].toLowerCase()
       }
       else{
         newStr += string[i].toUpperCase()
       }

     }
      
      return newStr

  }
