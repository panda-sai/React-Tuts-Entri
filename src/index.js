import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import ClassExample from './ClassExample.js';
import FunctionExample from './FunctionExample';
import FormComponent from './FormComponent';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';
import A from './A';
import DataFetchComponent from './DataFetchComponent';
import WebPage from './WebPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar websiteName="Vamsi Bhavani Course"/>
    <App />
    <ClassExample  data="VB"/>
    <FunctionExample/>
    <FormComponent/> */}
    {/* <ClassCounter/>
    <FunctionCounter/> */}
    {/* <A/> */}
    {/* <DataFetchComponent/> */}
    <WebPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
