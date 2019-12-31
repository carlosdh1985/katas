class Lamp {
  constructor(color, on) {
    this.color = color;
    this.on = false;
  }
  toggleSwitch() {
    if(this.on){
      this.on = false
    }
    else{
     this.on = true
    }
  }
  state() {
     if(this.on){
      return `The lamp is on.`;
     }
     else{
       return `The lamp is off.`
     }
    
  }
}
