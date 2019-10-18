function warnTheSheep(queue) {
  let arrRev = queue.reverse()
  let result = '';
   for (let i = 0; i < arrRev.length; i++){
      if(arrRev[0] === 'wolf'){
          result = "Pls go away and stop eating my sheep";
      }
      
      else{
      result = `Oi! Sheep number ${arrRev.indexOf('wolf')}! You are about to be eaten by a wolf!`
      }
   }
   return result
}
