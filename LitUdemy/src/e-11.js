import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_11 extends LitElement {
    static get properties() {
        return {
            countries: { type: Array }
        }
    }
    constructor() {
        super();
        this.countries = ["Mexico", "Colombia", "Holanda", "Alemania"];
    }
    render() {
        return html`
         <h2>manejar un Select y obtener su valor</h2>
        <select>
            <option select>--</option>
            ${this.countries.map(i => html`<option value="${i}">${i}</option>`)}
        </select>
    `
    }
}
customElements.define("e-11", Ejercicio_11)

