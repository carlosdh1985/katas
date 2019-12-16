function removeUrlAnchor(url){
  let newUrl = ''
  if(url.includes('#')){
      for(let i = 0; i < url.length; i++){
        if(url[i] === '#'){
           newUrl = url.slice(0, i)
        }
        
      }
  }
  else{
    newUrl = url
  }
      return newUrl
}
