import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './style.css'
import {Provider} from "react-redux";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import toDoSlice from "./redux/redux.js";

const rootReducer = combineReducers({
    toDoApp: toDoSlice
})

const store = configureStore({
    reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)
