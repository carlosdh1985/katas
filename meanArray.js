function getAverage(marks){
 let sum = marks.reduce((total, num)=> (total+num))
 let ave = Math.floor(sum/marks.length)
 return ave;
}
