import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import More from './pages/more/More';
import App from './App';
import Account from './pages/account/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="more" element={<More />} />
            <Route path="app" element={<App />} />
            <Route path="account" element={<Account />} />
          </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
