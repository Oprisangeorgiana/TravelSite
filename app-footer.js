import {
    LitElement, 
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

class Footer extends LitElement {

    static get styles() {
        return css`
        footer{
            justify-content: center;
            text-align: center;
            background: black;
            color: white;
            padding: 2px;
        }`;
    }

    render() {
        return html`
        <footer>
            <p>@copy {Dev}School</p>
        </footer>
        `;
    }


}

customElements.define("app-footer", Footer);