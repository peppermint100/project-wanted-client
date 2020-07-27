import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import rootReducers from "./redux/reducers/rootReducers"
import { Provider } from "react-redux"

const store = createStore(rootReducers);

store.subscribe(() => {
  console.log("redux store : ", store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
