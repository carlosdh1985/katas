function addLetters(...letters) {
  let arr = [];
  
  if(letters.length === 0){
    return 'z'
  }
  let str = letters.join("")
  for(let i = 0; i < str.length; i++){
     
     arr.push(str.charCodeAt(i))
     
    }
let newArr = arr.map((i)=>{
  return i - 96
})

let sum = newArr.reduce((total, num)=>{
  if(total + num > 26){
    return total + num - 26
  }
  else{
    return total + num;
  }
})

if((sum + 96) > 122){
    return String.fromCharCode(96 + sum + 96 - 122)
}
else{
    return String.fromCharCode(sum + 96)
}
 
}
