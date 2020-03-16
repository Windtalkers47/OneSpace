import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';



const Rounte=()=>(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

//Javascript to toggle the menu
//     document.getElementById('nav-toggle').onclick = function(){
//     document.getElementById("nav-content").classList.toggle("hidden");
// }

ReactDOM.render(<Rounte />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
