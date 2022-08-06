import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Account from './pages/account/Account';
import Home from './pages/home/Home';
import Purchase from './pages/purchase/Purchase';
import Setting from './pages/setting/Setting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="app" element={<App />} />
          <Route path="register" element={<Registration />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
