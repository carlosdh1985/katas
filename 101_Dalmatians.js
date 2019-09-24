function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  if(number <= 10){ var respond = dogs[0]} else if(number <= 50){var respond = dogs[1]}
  else if(number <= 100){var respond = dogs[2]}else{var respond = dogs[3]}
  
  
return respond;
}
