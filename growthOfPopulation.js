function nbYear(p0, percent, aug, p) {
 
  let years = 0
 
    
    for (let i = p0; i <= p; i++){

        i = p0 + p0 * percent/100 + aug;
        p0 = i;
        years++;
     
    }
 
 return years;
    
}
