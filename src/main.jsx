import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { cartReducer } from "./reducers/cartReducer";
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(cartReducer, devToolsEnhancer())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
