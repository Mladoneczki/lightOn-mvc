// pédányosítja a modellt, és a view: JatekTer 

import LightOnModell from "../modell/LightOnModell.js"
import JatekTer from "../view/Jatekter.js"
import Lampa from "../view/Lampa.js"

//feliratkozik a kapcsol sajáteseményünkre - itt fogja meghívogatni a modell tagfüggvényeit
export default class LightOnController{
    constructor(){
        this.loModel=new LightOnModell()
        let lista=this.loModel.getLista()

        this.szuloElem=$(".tartalom")
        new JatekTer(lista, this.szuloElem)
        //new Lampa(true, 0, this.szuloElem)
       this.kapcsolEsemeny() 
    }
    kapcsolEsemeny(){
        $(window).on("kapcsol",(event)=>{
            //event.detail - hányadik elemre kattintottam
            this.loModel.szomszedokKapcsolasa(event.detail)
            let lista=this.loModel.getLista()
            new JatekTer(lista, this.szuloElem)
        })
    }
}