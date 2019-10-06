function getIssuer(number) {
  let firstChar = number.toString();

   if((firstChar.slice(0,2) === "34" || firstChar.slice(0,2) === "37") && firstChar.length === 15){
      return "AMEX";
   }
   else if(firstChar.slice(0,4) === "6011" && firstChar.length === 16){
      return "Discover";
   }
   else if((firstChar.slice(0,2) === "51" || firstChar.slice(0,2) === "52" || firstChar.slice(0,2) === "53" || firstChar.slice(0,2) === "54" || firstChar.slice(0,2) === "55") && firstChar.length === 16){
      return "Mastercard";
   }
   else if(firstChar[0] === "4" && (firstChar.length === 13 || firstChar.length === 16)){
     return "VISA";
   }
   else{
     return "Unknown";
   }


}
