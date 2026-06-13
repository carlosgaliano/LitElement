import { LitElement, html} from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_05 extends LitElement {

    static get properties() {
        return {
            article: {type: Object},
            prop1: {type: String},
            prop2: {type: String}
        }
    }
    constructor() {
        super();
        this.article = {
            title: "Blog de Carlos",
            text: "Lit Element"
        }
        this.prop1 = "Estamos en la primera funcion";
        this.prop2 = "Creando plantillas secundarias";
    }
    render() {
        return html`
       <p>Adicionar Plantilla</p>
       ${this.showTextOne()}
       ${this.showTextTwo()}

    `
    }

    showTextOne(){
        return html`
            <h3>${this.article.title}</h3>
            <p>${this.article.text}</p>
        `;
    }

    showTextTwo(){
        return html`
            <p>${this.prop1}</p>
            <p>${this.prop2}</p>
        `;
    }
}
customElements.define("e-05", Ejercicio_05)

