import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_09 extends LitElement {
    
    render() {
        return html`
       <h2>Declarar un evento</h2>
        <button @click="${this.buttonEvento}">Soy un boton</button>
    `
    }

    buttonEvento(){
        console.log("le diste CLIC");
        
    }
}
customElements.define("e-09", Ejercicio_09)

