import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_02 extends LitElement {

    static get properties() {
        return {
            prop1: { type: String },
            prop2: { type: Number },
            prop3: { type: Boolean },
            prop4: { type: Array },
            prop5: { type: Array }
        };
    }

    constructor() {
        super();
        this.prop1 = "Hola Mundo";
        this.prop2 = 10;
        this.prop3 = true;
        this.prop4 = ["manzana", "Naranja", "Limon"];
        this.prop5 = [{
            mark: "Ford",
            model: "Mustang",
            year: 1969
        }, {
            mark: "Vosvagen",
            model: "Volvo",
            year: 2000
        }];
    }

    render() {
        return html`
            <p>${this.prop1}</p>
            <p>El valor es ${this.prop2}</p>
            ${this.prop3 ?
                html`<p>Si es True se muestra</p>` :
                html`<p>Si es False no se muestra</p>`}
            <ul>
                ${this.prop4.map(i => html`<li>${i}</li>`)}
            </ul>
            <ul>
                ${this.prop5.map(item => html`
                    <li>${item.mark} - ${item.model} - ${item.year}</li>
                `)}
            </ul>
        `
    }
}
customElements.define("e-02", Ejercicio_02);