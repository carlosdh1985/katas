function twoSort(s) {
  let newArr = []
    for(let i = 0; i < s.length; i++){
      newArr.push(s[i])
      newArr.sort()
      }
    let arr = newArr[0].split('')
    let str = arr.join('***')
    return str
}
