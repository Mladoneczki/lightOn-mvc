// Mi jellemzi a program állapotát?
// lista=[True, True,True, True,True, True,True, True,True]
//True - fel van kapcsolva a lámpa
//aktIndex - az az index, amelyik lámpára épp rákattintottam.

//getLista - visszaadja a listát, az aktuális állapottal

//szomszedokKapcsolasa(id) - megváltoztatja a listában az id elem értékét, és azok szomszédait is

export default class LightOnModell {
  #lista = [true, true, true, true, true, true, true, true, true];

  constructor() {
    
  }
  getLista(){
    return this.#lista
  }
  szomszedokKapcsolasa(id){
    //megváltoztatja a listában az aktuális elemet
    this.#lista[id]=!this.#lista[id]
    //illetve a szomszédokat

    let hossz=this.#lista.length-1
    if (id!=0){
      if(id!=3&&id!=6){
      this.#lista[id-1]=!this.#lista[id-1]}
      
    }
    if(id!=hossz){
      console.log(id)
      if(id!=2&&id!=5){
      this.#lista[id+1]=!this.#lista[id+1]}
    }
    if (id >= 3){  
      this.#lista[id-3] = !this.#lista[id-3];
    }
    if (id + 3 < hossz){ 
      this.#lista[id+3] = !this.#lista[id+3];
    }
    
    }

    
    
  }

