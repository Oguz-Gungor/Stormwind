import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Background from "./components/Page/Background";
import Home from "./containers/Home";
import { AboutUs } from "./containers/AboutUs";
import { ICT } from "./containers/ICT";
import { Games } from "./containers/Games";

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <ICT/>
      <Games/>
    </div>
  );
}

export default App;
