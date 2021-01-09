import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';


//React router have features like lazy code loading, dynamic route matching, and location transition handling built right in

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
