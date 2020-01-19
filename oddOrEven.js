function oddOrEven(array) {
  
 let mess = ''
if(array.length !== 0){
  let x = array.reduce((total, i)=>{
    return total + i
  })
   if(x % 2 === 0){
      mess = 'even'
   }
   else{
     mess = 'odd'
   }  
  // console.log(mess = 'even')
}
else{
  mess = 'even'
}
return mess
}
