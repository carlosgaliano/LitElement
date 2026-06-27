import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_03 extends LitElement {

    static get properties() {
        return {
            prop1: { type: String },
            prop2: { type: String },
            prop3: { type: Boolean },
            prop4: { type: String },
        }
    }

    constructor() {
        super();
        this.prop1 = "Enlace de texto";
        this.prop2 = "mydiv";
        this.prop3 = true;
        this.prop4 = "Placeholder";
    }

    boton(e) {
        console.log("Le diste CLIC: ", e);
    };

    render() {
        return html`
        <p>Binder por enlace de texto</p>
        <p>${this.prop1}</p>
        <p>Binder por enlace de atributo</p>
        <div id="${this.prop2}">Enlace de atributo</div>
        <p>Enlace de atributo booleano</p>
        <input type="text" ?disabled="${this.prop4}" value="desabilitado">
        <p>Vincular al valor del elemento</p>
        <input type="text" .placeholder="${this.prop4}"></input>
        <p>Enlace a un evento</p>
        <button type="button" @click="${this.boton}">Boton</button>

     `
    }
}
customElements.define("e-03", Ejercicio_03)
