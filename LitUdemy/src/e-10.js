import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_10 extends LitElement {
    static get properties() {
        return {
            prop1: { type: String }
        }
    }
    constructor() {
        super();
        this.prop1 = "Propiedad 1"
    }
    render() {
        return html`
       <p>Eventos</p>
       <input type="text" placeholder="Input uno" id="uno" @change="${this.event}">
       <input type="text" placeholder="Input tres" id="tres" @keyup="${this.keyupEvent}">
       <input type="text" placeholder="Input cuatro" id="cuatro" @input="${this.inputEvent}">
       <input type="text" placeholder="Input dos" id="dos" disabled>

    `
    }

    event(e){
        let valueInput = e.target.value;
        console.log("Evento change: ", valueInput);
    }

    // evento @keyup
    keyupEvent(e){
        if(e.target.value.length === 4){
            this.shadowRoot.getElementById("dos").disabled = false;
        }else{
            this.shadowRoot.getElementById("dos").disabled = true;
        }
        console.log(e.target.value.length);
        
    }

    //Evento input
    inputEvent(e){
        if(e.target.value.length === 4){
            console.log("Es igual a 4 ", e.target.value.length);
        }else{
            console.log("No es igual ", e.target.value.length);
            
        }
    }
}
customElements.define("e-10", Ejercicio_10)

