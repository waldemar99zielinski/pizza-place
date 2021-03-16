import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//redux
import { Provider } from "react-redux";
// import store from "./redux/store";

import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers/index";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
