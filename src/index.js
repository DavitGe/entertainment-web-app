import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import { Provider } from "react-redux";
import movieReducer from "./reducers/movieReducer";

import "./index.css";
import App from "./App";

const store = createStore(movieReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
