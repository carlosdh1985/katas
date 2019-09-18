function getAges(sum,difference){
let age_1;
let age_2;

age_1 = sum - (age_1 - difference)
age_1 = sum - age_1 + difference
age_1 = (sum + difference)/2
age_2 = sum - age_1;


let arrOfAges = [];

if(sum < 0 || difference < 0|| age_1 < 0 || age_2 < 0){
  return null;
}
else{
arrOfAges.push(age_1, age_2)
  return arrOfAges
}


};
