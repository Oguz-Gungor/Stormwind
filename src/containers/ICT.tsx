import * as React from "react";
import { i18Nget } from "../App";
import { Line } from "../components/Page/Background/Background";
import Page from "../components/Page/Page";
import { ArrowLink } from "../components/Sub/ArrowLink/ArrowLink";
import { ContainerMark } from "../components/Sub/ContainerMark/ContainerMark";
import { ImageLink } from "../components/Sub/ImageLink/ImageLink";
import { ColorStyle } from "../types/StyleTypes";
import "./ICT.scss";

const lines: Line[] = [
  { length: "13.8vh", placement: "22.6%" },
  { length: "52.3vh", placement: "37%" },
  { length: "31.98vh", placement: "48.75%" },
  { length: "11.1vh", placement: "91.7%" },
];

const images = [
  { src: "Rectangle10.png", label: "DEVELOPMENT_TITLE" },
  {
    src: "Rectangle18.png",
    label: "ICT_TITLE",
  },
  { src: "Rectangle5.png", label: "SEO_TITLE" },
  { src: "Rectangle20.png", label: "CONSALTING" },
  { src: "Rectangle21.png", label: "CONSALTING" },
];

export function ICT() {
  return (
    <Page
      colorStyle={ColorStyle.TERTIARY}
      lines={lines}
      className="ict-content"
      id={"ICT"}
    >
      <div className="flex column-flex container-flex">
        <ContainerMark />
        {descriptionFlex()}
        <ImagLinkMenu />
      </div>
    </Page>
  );
}

const descriptionFlex = () => {
  return (
    <div className="flex row-flex description-flex">
      <div className="flex column-flex left-flex">
        <div>STORMWIND ICT</div>
        <div>
          Provides consultancy and software support services in the field of
          information and communication technology.
        </div>
      </div>
      <div className="flex column-flex right-flex">
        <div>
          To its customers from different sectors, who are experts in the field
          of information and communication technology and serve in many fields;
          a technology firm that caters specifically to their needs.
        </div>
        <ArrowLink className="explore-link-container" label="Explore" />
      </div>
    </div>
  );
};

export const ImageMenu = (images: JSX.Element[]) => (
  <div className="flex display-flex image-flex">{images}</div>
);

const ImagLinkMenu = () =>
  ImageMenu(
    images.map(({ src, label }) => (
      <ImageLink key={src} src={src} label={label} />
    ))
  );
