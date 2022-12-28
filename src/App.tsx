import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Background from "./components/Page/Background";
import Home from "./containers/Home";
import { AboutUs } from "./containers/AboutUs";
import { ICT } from "./containers/ICT";
import { Games } from "./containers/Games";

const lang = "en";
const i18: { [lang: string]: { [key: string]: string } } = {
  en: {
    DEVELOPMENT_TITLE: "Development",
    ICT_TITLE: "Information and Communication Technology",
    SEO_TITLE: "SEO",
    CONSALTING: "Consalting",
    UPPER_FLEX_ELEMENT_1:
      "Discover effective and basic solutions just for you needs.",
    UPPER_FLEX_ELEMENT_2:
      "Carry your brand and energy to the technological future.",
    STORMWIND_LTD: "STORMWIND LTD",
    DESCRIPTION_1: "Discover us and let's transform your",
    DESCRIPTION_2: "own energy correctly and",
    DESCRIPTION_3: "develop it together.",
  },
};

export const i18Nget = (key: string) => {
  return i18[lang][key] ?? key;
};

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <ICT />
      <Games />
    </div>
  );
}

export default App;
