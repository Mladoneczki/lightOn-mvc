//kap egy listát a constructor(lista, szuloElem)
//példányosítja a lámpákat (9db)

import Lampa from "./Lampa.js";
export default class JatekTer {
  #lista = []; //privát adattag
  #taroloElem;
  constructor(lista, taroloELEM) {
    this.#lista = lista;
    this.#taroloElem = taroloELEM;
    this.#taroloElem.empty();
    this.kiir();
  }

  kiir() {
    this.#lista.forEach((elem, index) => {
      // console.log(elem); elem listánk elemei , ojektumok, egy kép adata
      new Lampa(elem, index, this.#taroloElem);
    });
  }
}
