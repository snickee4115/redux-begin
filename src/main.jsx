import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
