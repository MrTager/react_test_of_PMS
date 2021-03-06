//install babel
import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//use hash router
import { HashRouter } from 'react-router-dom'
//use provider component from react-redux
import { Provider } from  'react-redux'
//use antd
import { ConfigProvider } from 'antd';
// antd international
import zhCN from 'antd/lib/locale/zh_CN';
import store from './store'
require('./mock')


ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
