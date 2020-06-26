import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/HeaderComponent';
import GameShowComponent from './components/GameShowComponent'
// import GameShowContainer from './containers/GameShowContainer'
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import { formatMs } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <GameShowComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
