sortme = function( names ){
   let theStr = ''
   let theArr = []
   let theCap = []
   let theRealStr = ''
   let theRealArr = []
   for(let i = 0; i < names.length; i++){
     if(names[i][0] === names[i][0].toUpperCase()){
        theStr = names[i][0].toLowerCase() + "" +
               names[i].slice(1)   
        theCap.push(names[i][0])     
     }
       else(
          theStr = names[i]
       )
       theArr.push(theStr)
       theArr.sort()
      }  
     

         for(let j = 0; j < theArr.length; j++){
            
            if(theCap.includes(theArr[j][0].toUpperCase())){
              theRealStr = theArr[j].replace(theArr[j][0], theArr[j][0].toUpperCase())
                          // + "" + theArr[j].slice(1)   
            }
            else{
              theRealStr = theArr[j]
            }

            theRealArr.push(theRealStr)
         }
   return theRealArr
}
