import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module"

class ArticleDestination extends LitElement {

    static get styles() {
        return css`
        article{
            margin: 10px;
            border-style: double;
            padding: 20px;
            background: #F0F8FF;
        }

        h3 {
            text-align: center;
        }
        .article-img {
            width: 250px;
            height: 290px;
        }

        .flex-container {
            display: flex;
            
           
          }
        .information {
            margin: 40px;
          }
        `;
    }

    static get properties() {
        return {
            component: { type: Array },
            pageTitle: {type: String}
        }

    }

    constructor() {
        super();

        this.pageTitle = "Destinations"
        this.component = [
            // {
            //     image: "https://picsum.photos/250/290",
            //     altTag: "Japan",
            //     title: "Japan",
            //     description: "Japan is known worldwide for its traditional arts, including tea ceremonies, calligraphy and flower arranging. The country has a legacy of distinctive gardens, sculpture and poetry. Japan is home to more than a dozen UNESCO World Heritage sites and is the birthplace of sushi, one of its most famous.",
            //     site:"https://www.japan.travel/en/"
            // }
        ]

    }

    render() {
        return html`

        <section>
         
        ${Object.keys(this.component).map( (key) => {
            return html`
            <article>
            <div class="flex-container">
                <div>
                    <img src="${this.component[key].image}" alt="${this.component[key].altTag}" class="article-img">
                </div>
                <div class="information">
                    <h3><b>${this.component[key].title}</b></h3> 
                    <p>${this.component[key].description}</p> 
                    <a href="${this.component[key].site}" target="_blank">Find out more</a>
                </div>
            </div>
            </article>
            `
        })}
        </section>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.getDestination();
    }

    async getDestination() {
        const axios = window.axios;
        try{
            const response = await axios.get('https://devschool-2020.firebaseio.com/georgiana-oprisan/destinations.json');
            this.component = response.data;
        //    console.log(Object.keys(this.article).map( (key) => this.article[key].title));
        } catch(error) {
            console.log(error);
        }

    }


}

customElements.define("article-destination", ArticleDestination);


