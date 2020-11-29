import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

class Header extends LitElement {

    static get styles() {
        return css`
        nav {
            background-color: black;
            position: sticky;
            display: flex;
            justify-content: center;
            text-align: center;
            padding: 30px;
            
        }
        
        nav li {
            text-decoration: none;
            list-style: none;
            margin: 10px;
            display: inline-block;
            border-style: double;
            border-color: white;
            padding: 10px;
            
        }
        
        nav a {
            font-size: 25px;
            padding: 25px;
            /* margin: 10px; */
            text-decoration: none;
            color: white;
            
        }
        
        nav li:hover{
            background: grey;
            text-decoration: none;
            padding: 10px;
            
        }
        
        nav h1 {
            color: blanchedalmond;
            margin: 20px;
            margin-bottom: 40px;
            font-size: 50px;
        }
        `;
    }

    static get properties() {
        return {
            menuTitle: { type: Array },
            siteTitle: { type: String },
        }

    }

    constructor() {
        super();

        this.siteTitle = "Travel site"
        this.menuTitle = [
            {
                name: "Home",
                redirect: "home.html"
            },
            {
                name: "Destination",
                redirect: "destinations.html"
            },
            {
                name: "Language",
                redirect: "home.html"
            }
        ]

    }

    render() {
        return html`
        <header>
            <nav>
                <div class="container-fluid">
                    <div class="row">
                        <h1>${this.siteTitle}</h1>
                        <ul>
                            ${this.menuTitle.map((title) => {
            return html`
                            <li><a href="${title.redirect}"> ${title.name} </a></li>
                            `})}                    
                        </ul> 
                    </div>
                </div>
            </nav>
        </header>
        `;
    }


}

customElements.define("app-header", Header);


