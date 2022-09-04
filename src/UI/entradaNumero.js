import { LitElement, html } from 'lit-element';
import { ComponenteNoVisible } from '../datos/componenteNoVisible';

class EntradaNumero extends LitElement {
  static get properties() {
    return {
      num: { type: Number },
    };
  }
  constructor() {
    super();
    this.num = 0;
  }

  calcularResultado(event) {
    event.preventDefault();
    const solution = new ComponenteNoVisible();
    this.num = parseInt(this.shadowRoot.getElementById('value').value);
    solution.num = this.num;
    solution.secuencia();
    this.dispatchEvent(
      new CustomEvent('calculando', {
        bubbles: true,
        composed: true,
        detail: { resultado: solution.resultado },
      })
    );
  }

  render() {
    return html`
      <form @submit="${this.calcularResultado}">
        <label htmlFor="">Introduce un numero del 0 al 9</label>
        <input
          id="value"
          class="input"
          type="number"
          value="${this.num}"
          min="0"
          max="9"
        />
        <button>Mostrar resultado</button>
      </form>
    `;
  }
}

customElements.define('entrada-numero', EntradaNumero);
