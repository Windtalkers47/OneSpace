import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Page1 from "./pages/onespace_1A";
import Page2 from "./pages/onespace_1B"
import { TextField } from '@material-ui/core';


function App() {
  return (
   
    <BrowserRouter>
      <Route exact path="/home">
        <Page1/>
      </Route>
      <Route path="/page2">
        <Page2/>
      </Route>
    </BrowserRouter>
  
  );
}

export default App;



