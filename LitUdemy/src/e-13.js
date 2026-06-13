import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_13 extends LitElement {
    static get styles() {
        return css`
            .on {
                border-color: blue!important;
            }

            .off {
                border-color: red!important;
            }

            .on,
            .off {
                border: 2px solid gray;
            }
       `;
    }
    static get properties() {
        return {
            myBool: { type: Boolean }
        }
    }
    constructor() {
        super();
        this.myBool = true;
    }
    render() {
        return html`
       <h2>Evnto con operador ternario</h2>
       <p>Soy texto</p>
       <button @click="${this.click}">Click</button>
        <input type="text" 
                ?disabled="${this.myBool}" 
                class=${this.myBool ? "on" : "off"}
                placeholder="caja Habilitada/Desabilitada">
    `
    }

    click(e) {
        this.myBool = !this.myBool;

        console.log(this.myBool);

    }
}
customElements.define("e-13", Ejercicio_13)

