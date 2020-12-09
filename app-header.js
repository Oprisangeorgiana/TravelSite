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

    connectedCallback() {
        super.connectedCallback();

        // const iAmYoda = new Promise((resolve, reject) => {
        //     const person ='Yoda';
        //     if(person =='Yoda'){
        //         resolve('I am Yoda')
        //     }else{
        //         reject(`I am ${person}`)
        //     }

        // });

        // const promise2 = new Promise((resolve, reject) => 
        // setTimeout(reject, 700, 'not ok')
        // );

        // const promise3 = new Promise((resolve, reject) => 
        // setTimeout(reject, 500, 'not super ok')
        // );

        // iAmYoda
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        // .finally(() => console.log('in finally'));

        // Promise.race([iAmYoda, promise2, promise3])
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error));

        this.getPost();
        // this.getPost2();
    }

    // async getPost2() {
    //     const axios = window.axios;
    //     try{
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/anaaremere');
    //         console.log(response);
    //     } catch(error) {
    //         console.log(error);
    //     }
        
    //     // axios
    //     // .get('https://jsonplaceholder.typicode.com/posts')
    //     // .then((response) => console.log(response))
    //     // .catch((error) => console.log(error));

        
    //     console.log('la sfarsitul metodei');
    // }

    getPost() {
        const axios = window.axios;

        // axios
        // .get('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => console.log(response))
        // .catch((error) => console.log(error));

        // axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // }, {
        //     headers:{
        //         'content-type': 'multipart/form-data',
        //         Authorisation: 'Bearer ceva-token',
        //     }
        // })
        // .then((response) => console.log(response));

        // axios.request({
        //     url:'https://jsonplaceholder.typicode.com/posts', 
        //     method: 'POST',
        //     params: {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     }
        // });

        // const request = axios.create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/',
        //     timeout: 1000,
        //     headers: {
        //         Authorisation: 'Bearer ceva-token',
        //     }
        // });

        // request.get('posts').then((response) => console.log(response));

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json())
        // .then((data) => console.log(data));

        // const body =  {
        //             title: 'foo',
        //             body: 'bar',
        //             userId: 1,
        //         }

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method:'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body),
        // })
        //   .then((response) => response.json())
        //   .then((response) => console.log(response));
        
    }


}

customElements.define("app-header", Header);


