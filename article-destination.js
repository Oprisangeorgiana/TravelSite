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

        h1 {
            text-align: center;
        }
        .article-img {
            width: 250px;
            height: 290px;
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
            {
                image: "https://picsum.photos/250/290",
                altTag: "Japan",
                title: "Japan",
                description: "Japan is known worldwide for its traditional arts, including tea ceremonies, calligraphy and flower arranging. The country has a legacy of distinctive gardens, sculpture and poetry. Japan is home to more than a dozen UNESCO World Heritage sites and is the birthplace of sushi, one of its most famous.",
                site:"https://www.japan.travel/en/"
            },
            {
                image: "https://picsum.photos/250/291",
                altTag: "Korea",
                title: "South Korea",
                description: "South Korea is an extraordinary country filled with beautiful beaches, thriving cities, ancient temples, remarkable natural scenery and most importantly, friendly people with ancient history. South Korea has come a long way since The Korean War which ended in 1953.",
                site:"http://www.korea.net/"
            },
            {
                image: "https://picsum.photos/250/292",
                altTag: "France",
                title: "France",
                description: "France is the most popular tourist destination in the world. There are many reasons why so many people enjoy visiting the diverse country, including the natural beauty, the amazing climate, outdoor recreational activities such as golf courses, art museums and galleries and so much more. ",
                site:"http://ee.france.fr/"
            },
            {
                image: "https://picsum.photos/250/293",
                altTag: "Croatia",
                title: "Croatia",
                description: "Croatia is home of the world's biggest truffle. Croatia has highest number of UNESCO Intangible Goods of any European country. Zlatni rat beach changes in shape and colour depending on the wind.",
                site:"https://www.croatia.hr/"
            },
            {
                image: "https://picsum.photos/250/294",
                altTag: "Norway",
                title: "Norway",
                description: "Norway is a narrow country in northern Europe. It shares the Scandinavian Peninsula with Sweden and Finland. Norway's coastline is famous for its fjords (fyords), which are sea inlets between steep cliffs. The fjords were carved out by glaciers, as were the country's mountains.",
                site:"https://www.infoplease.com/world/countries/norway"
            },
            {
                image: "https://picsum.photos/250/295",
                altTag: "Greece",
                title: "Greece",
                description: "Greece has the longest coastline in Europe and is the southernmost country in Europe. The mainland has rugged mountains, forests, and lakes, but the country is well known for the thousands of islands dotting the blue Aegean Sea to the east, the Mediterranean Sea to the south, and the Ionian Sea to the west. ",
                site:"https://www.worldtravelguide.net/guides/europe/greece/"
            }
        ]

    }

    render() {
        return html`
        <section>
            <h1> ${this.pageTitle} </h1>
        </section>
        <section>
        ${this.component.map( (item) => {
            return html`
            <article>
            <div class="row">
                <div class="col-3">
                    <img src="${item.image}" alt="${item.altTag}" class="article-img">
                </div>
                <div class="col-9">
                    <h3><b>${item.title}</b></h3> 
                    <p>${item.description}</p> 
                    <a href="${item.site}" target="_blank">Find out more</a>
                </div>
            </div>
            </article>
            `
        })}
        </section>
        `;
    }


}

customElements.define("article-destination", ArticleDestination);


