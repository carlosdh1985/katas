function generateRange(min, max, step){
    let newArr =[];
      for(let i = min; i <= max; i=i+step){
          
         newArr.push(i)
      }

      return newArr;
}
