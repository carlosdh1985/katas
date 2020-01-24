// Return the output array, and ignore all non-op characters
function parse( data )
{ 
   let count = 0;
   let arr = []

  for(let i = 0; i < data.length; i++){
   if(data[i] === 'i'){
     count += 1;
   }
   else if(data[i] === 'd'){
     count -= 1;
   }
   else if(data[i] === 's'){
     count *= count;
   }
   else if(data[i] === 'o'){
        arr.push(count)
   }
  }
  return arr
}
