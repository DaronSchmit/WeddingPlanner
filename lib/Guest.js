class Guest{
  constructor(name, partysize = 1){
    this.name = name;
    this.partysize = partysize;
  }
  
  info(){
    let infostring = `${this.name} are in a party of ${this.partysize}`;
  }
}

module.exports = Guest;