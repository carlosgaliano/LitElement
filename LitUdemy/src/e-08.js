import { LitElement, html, css  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_08 extends LitElement {
   static get styles(){
    return css`
        :host{
            --color-primario: blue;
            --font-size: 1.2rem;
            --padding-left: 16px;
        }
        h2{
            color: var(--color-primario);
            font-size: var(--font-size);
            padding-left: var(--padding-left);
        }
    `;
   }
    render() {
        return html`
       <h2>Estilos con propiedades personalizadas</h2>

    `
    }
}
customElements.define("e-08", Ejercicio_08)

