import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';

document.title = 'Clinica PetShop'

ReactDOM.render(  
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();
