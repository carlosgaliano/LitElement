import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_12 extends LitElement {
    static get properties() {
        return {
            clicks: { type: Number }
        }
    }
    constructor() {
        super();
        this.clicks = 0;
    }
    render() {
        return html`
       <h2>Contador</h2>
       <button @click="${this.mas}">+</button>
       <button @click="${this.menos}">-</button>
       <p>Contador: ${this.clicks}</p>

    `
    }
    mas(e){
        this.clicks ++;
        console.log(this.clicks);
        
    }
    menos(e){
        this.clicks --;
        console.log(this.clicks);
        
    }
}
customElements.define("e-12", Ejercicio_12)

