function correctTail(body, tail){
  
 for(let i =0; i<body.length; i++){
    
     if (body[body.length-1] === tail) {
    return true
  }
  else {
    return false
  }
  
 } 
}
