import { LitElement, html } from 'lit-element';
import './UI/entradaNumero';
import './UI/resultado';

class app extends LitElement {
  static get properties() {
    return {
      resultado: { type: Number },
    };
  }
  constructor() {
    super();
    this.resultado = undefined;
  }

  printResult() {
    return this.resultado //Renderizado condicional
      ? html`
          <mostrar-resultado resultado=${this.resultado}></mostrar-resultado>
        `
      : '';
  }

  setResult(event) {
    this.resultado = event.detail.resultado;
  }

  render() {
    return html`
      <entrada-numero @calculando=${this.setResult}></entrada-numero>
      ${this.printResult()}
    `;
  }
}

customElements.define('app-container', app);
