import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Renders App function.
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
