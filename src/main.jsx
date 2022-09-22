import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './style.css'
import {createStore} from "redux";
import {todoApp} from "./modules for ToDo/reducers.js";
import {Provider} from "react-redux";

const store = createStore(todoApp);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)
