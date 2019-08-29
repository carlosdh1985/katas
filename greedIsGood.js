function score( dice ) {

let sum1 = sum2 = sum3 = sum4 = sum5 = sum6 = 0;
sums = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
let arr1 = dice.filter(function check1(u){return u === 1});
let arr2 = dice.filter(function check1(u){return u === 2});
let arr3 = dice.filter(function check1(u){return u === 3});
let arr4 = dice.filter(function check1(u){return u === 4});
let arr5 = dice.filter(function check1(u){return u === 5});
let arr6 = dice.filter(function check1(u){return u === 6});
switch (arr1.length) {case 0: sum1 = 0; break;
                      case 1: sum1 = 100; break;
                      case 2: sum1 = 200; break;
                      case 3: sum1 = 1000; break;
                      case 4: sum1 = 1100; break;
                      case 5: sum1 = 1200; break; 
                      }
switch (arr5.length) {case 0: sum5 = 0; break;
                      case 1: sum5 = 50; break;
                      case 2: sum5 = 100; break;
                      case 3: sum5 = 500; break;
                      case 4: sum5 = 550; break;
                      case 5: sum5 = 600; break; 
                      }
switch (arr2.length) {case 0: sum2 = 0; break;
                      case 3: sum2 = 200; break;
                      case 4: sum2 = 200; break;
                      case 5: sum2 = 200; break; 
                      }
switch (arr3.length) {case 0: sum3 = 0; break;
                      case 3: sum3 = 300; break;
                      case 4: sum3 = 300; break;
                      case 5: sum3 = 300; break; 
                      }
switch (arr4.length) {case 0: sum4 = 0; break;
                      case 3: sum4 = 400; break;
                      case 4: sum4 = 400; break;
                      case 5: sum4 = 400; break; 
                      }
switch (arr6.length) {case 0: sum6 = 0; break;
                      case 3: sum6 = 600; break;
                      case 4: sum6 = 600; break;
                      case 5: sum6 = 600; break; 
                      }


return sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
}
