import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducers/rootReducer';
import './reset.css';

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
