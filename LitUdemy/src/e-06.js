import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_06 extends LitElement {
    static get styles() {
        const mainColor = css`red`;
        return css`
            h1{
                color: ${mainColor};
            }
        `;
    }


    render() {
        return html`
            <p>Mostrando estilos</p>
            <h1>ESTILOS</h1>
        `
    }
}
customElements.define("e-06", Ejercicio_06)

