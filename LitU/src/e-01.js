import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

export class EjercicioUno extends LitElement{
        render() {
            return html`
                <p>prueba</p>
            `
        }
}
customElements.define('ejercicio-uno', EjercicioUno);