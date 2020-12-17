import {Router} from '@vaadin/router';
import "./main-component";
// import "./destinations-component";
// import "./destinationMain.js";
import "./destination-page"
import "./main-wrapper"
import "./article-destination"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', 
  component:'main-wrapper',
  children:[
    {path: '/', component: 'main-component'},
    {path: '/destinations', component: 'article-destination'}, // sau destinations-component
    {path: '/destinations/:id', component:'destination-page'}
  ]
},
  
  
]);