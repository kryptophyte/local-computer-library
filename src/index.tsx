import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import './output.css'
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let renderApp = (state) => {
 root.render(
      <App
          state={state}
          dispatch={store.dispatch}
          //bookPath={store.getState()}
      />
 );
}

renderApp(store.getState())

store.subscribe(() => renderApp(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
