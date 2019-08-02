function alphabetPosition(text) {
  let noPunctuation = text.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
  let noNumbers = noPunctuation.replace(/\d/g,"");
                                   
  let stringNumb = "";
   for (let i = 0; i < noNumbers.length; i++){
          
     stringNumb += (noNumbers.charCodeAt(i)- 64) + " ";
     
   }

return stringNumb.trim();
}
