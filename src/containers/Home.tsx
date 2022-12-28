import * as React from "react";
import { i18Nget } from "../App";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ColorStyle } from "../types/StyleTypes";
import "./Home.scss";

const lines: Line[] = [
  { length: "25.8%", placement: "8.4%" },
  { length: "20%", placement: "22.6%" },
  { length: "6.1%", placement: "51.25%" },
  { length: "21.2%", placement: "87%" },
];

export default function Home() {
  return (
    <Page
      colorStyle={ColorStyle.PRIMARY}
      lines={lines}
      className="home-content"
    >
      <div className="flex column-flex home-flex">
        {upperFlex()}
        {lowerFlex()}
      </div>
    </Page>
  );
}

const upperFlex = () => {
  return (
    <div className="flex row-flex upper-flex">
      <span className="upper-flex-element">
        {i18Nget("UPPER_FLEX_ELEMENT_1")}
      </span>
      <span className="upper-flex-element">
        {i18Nget("UPPER_FLEX_ELEMENT_2")}
      </span>
    </div>
  );
};

const lowerFlex = () => {
  return (
    <div className="flex row-flex lower-flex">
      <span className="lower-flex-element stormwind-label">
        {i18Nget("STORMWIND_LTD")}
      </span>
      <img src="logo2.png" className="logo" />
      <div className="flex column-flex header-flex">
        <div className="flex column-flex header-container">
          <span className="lower-flex-element header">Inspired</span>
          <span className="lower-flex-element header">
            <span className="secondary">from</span> Future
          </span>
        </div>
        <div className="flex column-flex">
          <span className="lower-flex-element description">
            {i18Nget("DESCRIPTION_1")}
          </span>
          <span className="lower-flex-element description">
            {i18Nget("DESCRIPTION_2")}
          </span>
          <span className="lower-flex-element description">
            {i18Nget("DESCRIPTION_3")}
          </span>
        </div>
      </div>
    </div>
  );
};
