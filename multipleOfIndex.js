function multipleOfIndex(array) {
   let b = []
   
   for(let i = 0; i < array.length; i++){
     if(array[i] % i === 0){
       b.push(array[i])
     }
   }
return b
}
