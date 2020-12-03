import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

class ArticlePost extends LitElement {

    static get styles() {
        return css`
        .flex-container {
            display: flex;
            background: #F0F8FF;
            border-style: double;
            border-color: black;
            margin: 5px;
            margin-left: 0px;
            
          }
        .information {
            margin: 20px;
        
        }
        
        img {
                width: 550px;
                height: 300px;
                margin: 10px;
                
        }
        `;
    }

    static get properties() {
        return {
            article: { type: Array }   
        }

    }

    constructor() {
        super();

        this.article = [
            {
                title: "First article title",
                subtitle: "First article subtitle",
                description: "First article description",
                picture: "https://picsum.photos/550/350",
                alt: "Picture1",
                infoPosition: true
            },
            {
                title: "Second article title",
                subtitle: "Second article subtitle",
                description: "Second article description",
                picture: "https://picsum.photos/550/300",
                alt: "Picture2",
                infoPosition: true
            },
            {
                title: "Third article title",
                subtitle: "Third article subtitle",
                description: "Third article description",
                picture: "https://picsum.photos/550/400",
                alt: "Picture3",
                infoPosition: true
            }
        ]

    }

    render() {
        return html`

        ${this.article.map( (article) => { 
            return html`
            <div class = "flex-container">

            ${this.article.infoPosition ? "item-checked":""}

                    <div>
                        <picture>
                            <source media="(min-with:500px)" srcset="https://picsum.photos/200/300">
                            <source media="(min-with:250px)" srcset="https://picsum.photos/200">
                            <img src="${article.picture}" alt="${article.alt}">
                        </picture>
                    </div>

                    <div class="information">
                            <h4>${article.title}</h4>
                            <h5>${article.subtitle}</h5>
                            <p>${article.description}</p>
                    </div>

            </div>
            
            `})}
        `;
    }


}

customElements.define("article-post", ArticlePost);


