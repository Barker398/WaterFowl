import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";
import { Waterfowl } from "./components/Waterfowl";
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Waterfowl />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
