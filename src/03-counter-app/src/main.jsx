import React from 'react';
import ReactDOM from 'react-dom/client';
//import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <HelloWorldApp /> */}
       <CounterApp value={100} />
      {/* <FirstApp title='Hola'/> */}
    </React.StrictMode>
);
