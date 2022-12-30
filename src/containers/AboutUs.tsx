import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ArrowLink } from "../components/Sub/ArrowLink";
import { ColorStyle } from "../types/StyleTypes";
import "./AboutUs.scss";

const lines: Line[] = [{ length: "13.3%", placement: "27.3%" }];

export function AboutUs() {
  return (
    <Page
      colorStyle={ColorStyle.SECONDARY}
      lines={lines}
      id={AboutUs.name}
      className="about-us-content"
    >
      <div className="flex row-flex main-container">
        {leftFlex()}
        {rightFlex()}
      </div>
    </Page>
  );
}

const leftFlex = () => {
  return (
    <div className="flex column-flex left-flex">
      <div className="header">
        ABOUT <span className="lower">US</span>
      </div>
      <div className="flex column-flex description-flex">
        <div> Share your future with us.</div>
        <div> Manage. Arrival.</div>
      </div>

      <ArrowLink className="connect-us-link-container" label="Connect US" />
    </div>
  );
};
const statistics = [
  { label: "Countries", value: 24 },
  { label: "Projects", value: 177 },
  { label: "Refferences", value: 91 },
];

const rightFlex = () => {
  return (
    <div className="flex column-flex right-flex">
      <img src="Rectangle8.png" width={788} height={344} />
      <div className="description">
        Stormwind Company Limited is a technology and consultancy organization
        established in 2012 in Turkey. Stormwind ICT and Stormwind Games, the
        main companies with their services and products in different technology
        branches, are tailored to the needs of their users; provides various
        services in technology, design, software, information and communication
        technologies and sub-branches.
      </div>
      <div className="flex row-flex statistics-flex">
        {statistics.map(({ label, value }) => (
          <div className="flex column-flex statistic-cell">
            <div className="label">{label}</div>
            <div className="value">{value.toString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
