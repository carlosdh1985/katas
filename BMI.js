function bmi(weight, height) {
  let str = ''
  
  if(weight / Math.pow(height, 2) <= 18.5 ){
     str = "Underweight"
    }
    else if(weight / Math.pow(height, 2) <= 25.0){
      str = "Normal"
    }
    else if(weight / Math.pow(height, 2) <= 30.0){
       str = "Overweight"
    }
    else{
       str = "Obese"
       }
    
  return str;
  
  
  
}
