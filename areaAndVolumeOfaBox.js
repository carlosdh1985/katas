function getSize(width, height, depth){
    let area = (2 * (width * height)) + 
               (2 * (depth * height)) +
               (2 * (width * depth));
    let volumen = width * depth * height;

    let result = []

     result.push(area) 

     result.push(volumen)

     return result  

}
