import {
    LitElement,
    html,
    css
} from "lit-element"

// import axios from 'axios';
import {request} from "./lib"


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
            // {
            //     title: "First article title",
            //     subtitle: "First article subtitle",
            //     description: "First article description",
            //     picture: "https://picsum.photos/550/350",
            //     alt: "Picture1",
            //     infoPosition: true
            // }
        ]

    }

    render() {
        return html`
        ${Object.keys(this.article).map( (key) => {
            // this.article[key].title}}
        // ${this.article.map( (article) => { 
            return html`
            <div class = "flex-container">

                    <div>
                        <picture>
                            <source media="(min-with:500px)" srcset="https://picsum.photos/200/300">
                            <source media="(min-with:250px)" srcset="https://picsum.photos/200">
                            <img src="${this.article[key].picture}" alt="${this.article[key].alt}">
                        </picture>
                    </div>

                    <div class="information">
                            <h4>${this.article[key].title}</h4>
                            <h5>${this.article[key].subtitle}</h5>
                            <p>${this.article[key].description}</p>
                    </div>

            </div>
            
            `})}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.getArticle();
    }

    async getArticle() {
        // const axios = window.axios;
        // try{
        //     const response = await axios.get('https://devschool-2020.firebaseio.com/georgiana-oprisan/articles.json');
        //     this.article = response.data;
        // //    console.log(Object.keys(this.article).map( (key) => this.article[key].title));
        // } catch(error) {
        //     console.log(error);
        // }

        // // console.log(this.article);
        const location = "https://devschool-2020.firebaseio.com/georgiana-oprisan/articles.json"
        
       
        localStorage.setItem("token", "ana are mere");
        const response = await request(location);
        this.article = response;
        // console.log(response);
    }



}

customElements.define("article-post", ArticlePost);


