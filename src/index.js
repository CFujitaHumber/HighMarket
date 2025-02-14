/**
 * @file main file for High Market Website Development
 * @author Carson Fujita
 * @copyright Carson Fujita 2024
 */

//Required React Imports
import ReactDOM from 'react-dom/client'
//import app
import App from './App';

//clear existing html content
document.body.innerHTML = '<div id="app"></div>';

//import css bootstrap styling
import './bootstrap.min.css';
import React from 'react';

//render App
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />)