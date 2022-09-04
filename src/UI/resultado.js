import { LitElement, html } from 'lit-element';
import { ComponenteNoVisible } from '../datos/componenteNoVisible';

class Resultado extends LitElement {
  static get properties() {
    return {
      resultado: { type: Number },
    };
  }
  constructor() {
    super();
    this.resultado = undefined;
  }

  render() {
    return html`
      <div>
        <p>El resultado es ${this.resultado}</p>
      </div>
    `;
  }
}

customElements.define('mostrar-resultado', Resultado);
