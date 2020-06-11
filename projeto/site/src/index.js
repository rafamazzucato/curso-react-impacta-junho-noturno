import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './App';
import reducers from './reducers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);