import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
  cash: 5
}

//Методы store - получить состояние, изменить состояние и подписаться на изменение состояния

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state;
  }
}

const store = createStore(reducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

