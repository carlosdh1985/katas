function getRealFloor(n) {
let result = 0
if(n <= 0){result = n}
else if(n <= 13){result = n - 1}
else{result = n - 2}
return result
}
