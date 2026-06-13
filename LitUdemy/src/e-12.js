import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_08 extends LitElement {
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
       <p>sss</p>

    `
    }
}
customElements.define("e-08", Ejercicio_08)

