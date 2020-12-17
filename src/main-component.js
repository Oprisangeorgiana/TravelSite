import {
    LitElement,
    html,
    css
} from "lit-element"


import "./article-post.js";


class MainComponent extends LitElement{

    static get styles() {
        return css`
        body{
            font-family: serif;
            background: blanchedalmond;
        }
        
        // main{
        //     justify-content: center;
        //     /* text-align: center; */
        //     display: flex;
        //     padding: 30px;
        // }
        
        h2 {
            text-align: center;
            padding-bottom: 20px;
        }
        
        `;
    }

    render(){
        return html` 
        
        <main>
            <section>
    
                <h2>Home</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                     recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
            </section>
    
            <section>
                <article-post></article-post>
            </section>
    
        </main>
       
    
    `
    }
}

export default customElements.define("main-component", MainComponent);
