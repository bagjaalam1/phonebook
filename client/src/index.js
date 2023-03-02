import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);