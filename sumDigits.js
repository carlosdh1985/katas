function sumDigits(number) {
let arr = []
if(number === 0){
  return 0
}
else{
  for(let i = 0; i < number.toString().length; i++){
     arr = number.toString().split('')
    if(arr[0] === '-'){
       arr = arr.slice(1)
    }
  }

  let newArr = arr.reduce((total, num) =>{
     
      return parseInt(total) + parseInt(num);
     
   
  })
return newArr
}
