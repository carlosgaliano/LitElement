import { html, LitElement, css } from "lit";
import { butonCss } from './button.style.js';

const pet = {
    name: "Simon",
    age: 9
}

const petsProxy = new Proxy(pet, {
    get: function(target, property, itemProxy){
        console.log(property);
        return target[property];
        
    }
} )
console.log(petsProxy.name);



export class ButtonComponent extends LitElement {
    static get styles() {
        return [butonCss]
    }
    render() {
        return html`
            <p>Soy yo</p>
            <button class="boton" @click="${this.clickButton}" ?disabled=${this.disable}>Click</button>
        `;
    }

    static get properties() {
        return {
            disable: { type: Boolean },
        };
    }

    constructor(){
        super();
        this.disable = true;
    }

    clickButton() {
        console.log("Clic");

    }
}
customElements.define("lit-button", ButtonComponent);