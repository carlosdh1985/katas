var quote = function(fighter) {
   let mess = ''
  if(fighter === 'George Saint Pierre' || fighter === 'George Saint Pierre'.toLowerCase() 
      || fighter === 'George Saint Pierre'.toUpperCase() ){
      mess = "I am not impressed by your performance."
  }
  else if (fighter === 'Conor McGregor' || fighter === 'Conor McGregor'.toLowerCase() 
            || fighter === 'Conor McGregor'.toUpperCase()){
      mess = "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  }
  return mess
};
