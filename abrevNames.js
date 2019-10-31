function abbrevName(name){

let capitals = name.toUpperCase(name)

let arr = capitals.split(" ")

let a = arr[0][0]
let b = arr[1][0]


return `${a}.${b}`


}
