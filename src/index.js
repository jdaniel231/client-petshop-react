import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout';

document.title = 'Clinica PetShop'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
  <Layout />
</React.StrictMode>);


reportWebVitals();
