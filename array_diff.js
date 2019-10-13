function array_diff(a, b) {
  if(a.length === 0){return []}
  else if(b.length === 0){return a}
  let d = a.concat(b)
  let blah = []
  
   for(let i = 0; i < d.length; i++){
         if(!b.includes(d[i])){
           blah.push(d[i])
         }

   }
   return blah
     
  }
