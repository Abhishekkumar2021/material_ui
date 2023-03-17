import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {BrowserRouter} from 'react-router-dom';
import Main from './Components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main>
      <App />
    </Main>
    </BrowserRouter>
  </React.StrictMode>
);

