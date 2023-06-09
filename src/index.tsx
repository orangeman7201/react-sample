import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Container from './components/Container';
import ContextSample from './components/ContextSample';
import Counter from './components/Counter';
import Reducer from './components/Reducer';
import { Parent } from './components/Parent';
import { Clock } from './components/Clock';
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import UseImperativeHandle from './components/UseImperativeHandle';
import { Input } from './components/UseCallback';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
