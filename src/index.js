import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
// import { ThemeProvider } from "./context/ThemeProvider"

ReactDOM.render(
  <Router>
    {/* <ThemeProvider> */}
      <App /> 
    {/* </ThemeProvider> */}
  </Router>
  ,document.getElementById('root')
);