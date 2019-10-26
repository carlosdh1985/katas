function inviteMoreWomen(L) {
  let womenCount = 0;
  let menCount = 0;
    for(let i = 0; i < L.length; i++){
             if(L[i] === -1){
            womenCount += 1;
            }
         else if(L[i] === 1){
             menCount += 1;
         }
       }
  
         if(womenCount < menCount){
           return true;
           }
        else{
       return false
            }
}
