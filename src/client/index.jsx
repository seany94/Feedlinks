import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';

// global styles
import './styles/app.scss';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));