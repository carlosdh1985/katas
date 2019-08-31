function elevator(left, right, call){
  if (left === right){
    return "right";
  }
else{
       let posRight = 0;
       let posLeft = 0;
      
      if (right - call < 0){
          posRight = -1 * (right - call)
          }
      else{
        posRight = 1 *  (right - call)
      }
      if (left - call < 0){
          posLeft = -1 * (left - call)
          }
      else{
        posLeft = 1 * (left - call)
      }
      
      

       if(posRight <= posLeft){
         return "right";
       }
       else{
         return "left";
       }


}

 
}
