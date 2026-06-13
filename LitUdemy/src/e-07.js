import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';

import { styleModule } from '../src/assets/css/style';

export class Ejercicio_07 extends LitElement {

    static get styles() {
        return [
            styleModule,
            css`
                
            `
        
        ]
    }

    render() {
        return html`
       <h2>Importar Estilos</h2>
       <button class="button-style">Click</button>

    `
    }
}
customElements.define("e-07", Ejercicio_07)

