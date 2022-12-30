import * as React from "react";
import { i18Nget } from "../App";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ImageLink } from "../components/Sub/ImageLink";
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
      id={ICT.name}

    >
      <ImagLinkMenu />
    </Page>
  );
}

export const ImageMenu = (images: JSX.Element[]) => (
  <div className="flex display-flex image-flex">{images}</div>
);

const ImagLinkMenu = () =>
  ImageMenu(
    images.map(({ src, label }) => <ImageLink key={src} src={src} label={label} />)
  );
