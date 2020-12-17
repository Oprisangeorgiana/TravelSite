import {
    LitElement,
    html,
    // css
} from "lit-element"


import "./article-destination.js";


class DestinationsComponent extends LitElement{


    render(){
        return html`
       
    <main>
		<section>
            <h2> Destinations </h2>
        </section>

          <div class="container-fluid">
              
            <article-destination></article-destination> 
              
          </div>

	  </section>

    </main>
    
    `
    }
}

export default customElements.define("destination-component", DestinationsComponent);
