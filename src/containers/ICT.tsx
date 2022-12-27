import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ImageLink } from "../components/Sub/ImageLink";
import { ColorStyle } from "../types/StyleTypes";
import "./ICT.scss";

const lines: Line[] = [
  { length: 120, placement: "30%" },
  { length: 360, placement: "60%" },
];

const images = [
  { src: "Rectangle10.png", label: "Development" },
  {
    src: "Rectangle18.png",
    label: "Information and Communications Technology",
  },
  { src: "Rectangle5.png", label: "SEO" },
  { src: "Rectangle20.png", label: "Consalting" },
  { src: "Rectangle21.png", label: "Consalting" },
];

export function ICT() {
  return (
    <Page
      colorStyle={ColorStyle.TERTIARY}
      lines={lines}
      className="ict-content"
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
    images.map(({ src, label }) => <ImageLink src={src} label={label} />)
  );
