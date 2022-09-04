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
    this.num = 5;
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
    <style>
     input[type=number], select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
    }
    .flex {
      display: flex;
      justify-content: center;
      border-radius: 5px;
      background-color: #F5F5F5;
      padding: 20px;
      width:50vw
    }

    button {
      width: 100%;
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover{
      background-color:green;
    }

    label{
      font-size:20px
    }
    .sombra{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    </style>
    <div class="flex sombra">
      <form @submit="${this.calcularResultado}">
        <label>Introduce un numero del 0 al 9</label>
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
      </div>
    `;
  }
}

customElements.define('entrada-numero', EntradaNumero);
