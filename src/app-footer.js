import {
    LitElement, 
    html,
    css
} from "lit-element"

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