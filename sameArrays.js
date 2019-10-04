function comp(a, b) {

  if(a === null || b === null){
    return false
  }
  else{
   let aSorted = a.sort(function(a, b){return a-b});
   let bSorted = b.sort(function(a, b){return a-b});

  let lefty = aSorted.map((element)=>{
    return element * element;
  })



 if(JSON.stringify(lefty) === JSON.stringify(bSorted)){
    return true;
  }
  else{
    return false
  }

  }
}
