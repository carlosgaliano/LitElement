import { LitElement, html  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_04 extends LitElement {
    render() {
        return html`
        <p>Slot</p>
        <!--<div>Hola usuario: <slot>desconocido</slot></div>-->
        <div>
            <slot name="name"></slot>
            <slot name="age"></slot>
            <slot name="job"></slot>
        </div>

    `
    }
}
customElements.define("e-04", Ejercicio_04)
