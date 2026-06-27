import { LitElement, html, css  } from "lit";
import { customElement } from 'lit/decorators.js';

export class Ejercicio_14 extends LitElement {
    static get styles(){
        return css`
      #correcta{
        color: green;
      }      
      #incorrecta{
        color: red;
      }
        `;
    }

    static get properties() {
        return {
            respuesta: { type: String },
            resp1: { type: String },
            resp2: { type: String },
            resp3: { type: String },
            resp4: { type: String },
            pregunta: { type: String },
            correcta: {type: String},
            incorrecta: {type: String},
        }
    }
    constructor() {
        super();
        this.respuesta = "";
        this.pregunta = "Cual Pokemon No es tipo fuego?";
        this.resp1 = "Charizard";
        this.resp2 = "Oddish";
        this.resp3 = "Rapidash";
        this.resp4 = "Cydaquil";
        this.correcta = "Respuesta Correcta";
        this.incorrecta = "Respuesta inCorrecta";
    }
    render() {
        return html`
       <h3>${this.pregunta}</h3>
       <p>${this.resp1}</p>
       <p>${this.resp2}</p>
       <p>${this.resp3}</p>
       <p>${this.resp4}</p>

       <input type="text" @change="${this.preguntaValidar}"></imput>
       <p>Tu respuesta: ${this.respuesta}</p>
       <span id="correcta"></span>
       <span id="incorrecta"></span>
    `
    }

    preguntaValidar(e){
        let pregunta = e.target.value;
        this.respuesta = pregunta;
        
        if(pregunta === 'Oddish'){
            console.log("Respuesta Correcta ", pregunta);
            this.shadowRoot.getElementById("correcta").innerHTML = this.correcta;
            this.shadowRoot.getElementById("incorrecta").style.display = "none";
        }else{this.shadowRoot.getElementById("correcta").style.display = "block";
            console.log("Intenta de nuevo");
            this.shadowRoot.getElementById("incorrecta").innerHTML = this.incorrecta;
            this.shadowRoot.getElementById("correcta").style.display = "none";
            this.shadowRoot.getElementById("incorrecta").style.display = "block";
        }
    }

}
customElements.define("e-14", Ejercicio_14)

